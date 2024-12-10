#### 判断是否换行
```js
const cellChild = event.target.querySelector('.cell');
if (!(hasClass(cellChild, 'el-tooltip') && cellChild.childNodes.length)) {
  return;
}
// use range width instead of scrollWidth to determine whether the text is overflowing
// to address a potential FireFox bug: https://bugzilla.mozilla.org/show_bug.cgi?id=1074543#c3
const range = document.createRange();
range.setStart(cellChild, 0);
range.setEnd(cellChild, cellChild.childNodes.length);
const rangeWidth = range.getBoundingClientRect().width;
const padding = (parseInt(getStyle(cellChild, 'paddingLeft'), 10) || 0) +
  (parseInt(getStyle(cellChild, 'paddingRight'), 10) || 0);
if ((rangeWidth + padding > cellChild.offsetWidth || cellChild.scrollWidth > cellChild.offsetWidth) && this.$refs.tooltip) {
  const tooltip = this.$refs.tooltip;
  // TODO 会引起整个 Table 的重新渲染，需要优化
  this.tooltipContent = cell.innerText || cell.textContent;
  tooltip.referenceElm = cell;
  tooltip.$refs.popper && (tooltip.$refs.popper.style.display = 'none');
  tooltip.doDestroy();
  tooltip.setExpectedState(true);
  this.activateTooltip(tooltip);
}

```
#### jspdf web worker实践

```js
// workder
importScripts('https://cdn.staticfile.org/jspdf/2.4.0/jspdf.umd.min.js');

onmessage = function (e) {
  console.log('Message received from main script');
  console.log(e);
  console.log(this);
  const data = e.data;
  let leftHeight = data.leftHeight;
  const pageHeight = data.pageHeight;
  const pageData = data.pageData;
  const imgWidth = data.imgWidth;
  const imgHeight = data.imgHeight;
  const name = data.name;
  const jsPDF = this.jspdf.jsPDF;
  const pdf = new jsPDF('', 'pt', 'a4');

  let position = 0;
  // 有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(CONST_PDF_HEIGHT)
  // 当内容未超过pdf一页显示的范围，无需分页
  if (leftHeight < pageHeight) {
    pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
  }
  else { // 分页
    while (0 < leftHeight) {
      pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight);
      leftHeight -= pageHeight;
      position -= 841.89;
      // 避免添加空白页
      if (0 < leftHeight) {
        pdf.addPage();
      }
    }
  }
   const blob = doc.output( 'blob' );
  postMessage( blob, [blob] );
  // pdf.save(`${name}.pdf`);
  this.postMessage({ status: 'complete', value: pdf });
};

// Main.js
import saveAs from 'file-saver';
import dataURItoBlob from './dataURItoBlob`;

worker.addEventListener('message', e => {
  const blob = e.data;
  saveAs( blob, 'mypdf.pdf' );
  worker.terminate(); // Terminates the worker.
}, false);

```