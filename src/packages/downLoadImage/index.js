import html2canvas from 'html2canvas';
export default function (html, title, scale = 2) {
  const shareContent = html;
  const width = shareContent.offsetWidth;
  const height = shareContent.offsetHeight;
  const canvas = document.createElement('canvas');
  canvas.width = width * scale;
  canvas.height = height * scale;
  canvas.getContext('2d').scale(scale, scale);
  const opts = {
    canvas,
    timeout: 1500
  };
  html2canvas(shareContent, opts).then((canvas) => {
    const link = document.createElement('a');
    link.href = canvas.toDataURL();
    link.setAttribute('download', `${title}.png`);
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
      document.body.removeChild(link);
    }, 1000);
  });
}
