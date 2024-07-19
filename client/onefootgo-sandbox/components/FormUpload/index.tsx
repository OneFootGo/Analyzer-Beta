export default function FormUpload() {
    return (
      <div>
        <h1>Upload a File</h1>
        <form action="/api/upload" method="post" encType="multipart/form-data">
          <input type="file" name="file" />
          <button type="submit">Upload</button>
        </form>
      </div>
    );
  }