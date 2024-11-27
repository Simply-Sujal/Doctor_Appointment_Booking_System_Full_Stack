import multer from "multer";


// configuration for disc storgae
const storage = multer.diskStorage({
    filename: function (req, file, callback) {
        callback(null, file.originalname)
    }
})

const upload = multer({ storage });

export default upload;

