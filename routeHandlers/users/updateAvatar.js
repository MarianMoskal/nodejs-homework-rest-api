const path = require('path')
const Jimp = require('jimp')
const fs = require('fs/promises')
const { User } = require('../../models')

const avatarsDir = path.join(__dirname, '../../', 'public', 'avatars')

const updateAvatar = async (req, res) => {
  const { path: tempUpload, originalname } = req.file
  const { _id: id } = req.user
  const imageName = `${id}_${originalname}`

  try {
    const resultUpload = path.join(avatarsDir, imageName)

    await fs.rename(tempUpload, resultUpload)

    Jimp.read(resultUpload)
      .then(avatar => {
        avatar
          .resize(250, 250, Jimp.RESIZE_BILINEAR)
          .write(resultUpload)
      })
      .catch(error => {
        throw error
      })

    const avatarURL = resultUpload

    await User.findByIdAndUpdate(req.user._id, { avatarURL })
    res.json({ avatarURL })
  } catch (error) {
    await fs.unlink(tempUpload)
    throw error
  }
}

module.exports = updateAvatar
