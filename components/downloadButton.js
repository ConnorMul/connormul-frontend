'use client'

export default function DownloadButton({ fileUrl, fileName }) {
  const handleButtonClick = () => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.target = '_blank'; // Open in a new tab
    link.download = fileName;
    link.click();
  };

  return (
    <button className="download-button" onClick={handleButtonClick}>
      Download {fileName}
    </button>
  );
}