

export const handleDownload = (url) => {
    // // Logic to initiate the download
    // const pdfUrl = 'c:\Users\Asus\Downloads\Akash_Adhikary Resume.pdf';
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]));
        const fileName = url.split("/").pop();
        const link = document.createElement("a");
        link.href = blobURL;
        link.setAttribute("download", fileName);
        document.body.appendChild(link);
        link.click();
        link.remove();
      });
    //var blob = new Blob([data]);

    // document.body.removeChild(link);
  };


