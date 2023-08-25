import multer from "multer";

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "." + file.mimetype[0];
    cb(null, uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

export default upload;
