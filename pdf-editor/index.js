document.addEventListener('DOMContentLoaded', function() {
    // Language translations
    const translations = {
        'en': {
            'editor-title': 'PDF Editor',
            'merge-tab': 'Merge PDFs',
            'separate-tab': 'Split PDF',
            'rearrange-tab': 'Rearrange Pages',
            'merge-title': 'Merge PDFs',
            'merge-select': 'Select PDFs to Merge',
            'merge-drag': 'Or drag and drop PDF files here',
            'merge-button': 'Merge PDFs',
            'processing': 'Processing...',
            'split-title': 'Split PDF',
            'split-select': 'Select PDF to Split',
            'split-drag': 'Or drag and drop a PDF file here',
            'split-method': 'Split Method:',
            'split-all': 'Extract All Pages',
            'split-range': 'Extract Page Range',
            'page-range': 'Page Range:',
            'page-range-placeholder': 'e.g., 1-3, 5, 7-9',
            'split-button': 'Split PDF',
            'rearrange-title': 'Rearrange Pages',
            'rearrange-select': 'Select PDF to Rearrange',
            'rearrange-drag': 'Or drag and drop a PDF file here',
            'rearrange-button': 'Save Rearranged PDF',
            'total-pages': 'Total pages:',
            'page-text': 'Page',
            'no-files': 'No files selected',
            'error-loading': 'Error loading PDF. Please try again.',
            'error-merging': 'Error merging PDFs. Please try again.',
            'error-splitting': 'Error separating PDF. Please try again.',
            'error-rearranging': 'Error rearranging PDF. Please try again.',
            'loading-previews': 'Loading previews...',
            'select-pdf': 'Please select a PDF file.',
            'valid-range': 'Please enter a valid page range.',
            'no-valid-range': 'No valid page ranges found.'
        },
        'ar': {
            'editor-title': 'محرر PDF',
            'merge-tab': 'دمج ملفات PDF',
            'separate-tab': 'تقسيم PDF',
            'rearrange-tab': 'إعادة ترتيب الصفحات',
            'merge-title': 'دمج ملفات PDF',
            'merge-select': 'حدد ملفات PDF للدمج',
            'merge-drag': 'أو اسحب وأفلت ملفات PDF هنا',
            'merge-button': 'دمج ملفات PDF',
            'processing': 'جار المعالجة...',
            'split-title': 'تقسيم PDF',
            'split-select': 'حدد ملف PDF للتقسيم',
            'split-drag': 'أو اسحب وأفلت ملف PDF هنا',
            'split-method': 'طريقة التقسيم:',
            'split-all': 'استخراج كل الصفحات',
            'split-range': 'استخراج نطاق الصفحات',
            'page-range': 'نطاق الصفحات:',
            'page-range-placeholder': 'مثال: 1-3, 5, 7-9',
            'split-button': 'تقسيم PDF',
            'rearrange-title': 'إعادة ترتيب الصفحات',
            'rearrange-select': 'حدد ملف PDF لإعادة الترتيب',
            'rearrange-drag': 'أو اسحب وأفلت ملف PDF هنا',
            'rearrange-button': 'حفظ PDF المعاد ترتيبه',
            'total-pages': 'إجمالي الصفحات:',
            'page-text': 'صفحة',
            'no-files': 'لم يتم تحديد ملفات',
            'error-loading': 'خطأ في تحميل PDF. يرجى المحاولة مرة أخرى.',
            'error-merging': 'خطأ في دمج ملفات PDF. يرجى المحاولة مرة أخرى.',
            'error-splitting': 'خطأ في تقسيم PDF. يرجى المحاولة مرة أخرى.',
            'error-rearranging': 'خطأ في إعادة ترتيب PDF. يرجى المحاولة مرة أخرى.',
            'loading-previews': 'جار تحميل المعاينات...',
            'select-pdf': 'يرجى تحديد ملف PDF.',
            'valid-range': 'يرجى إدخال نطاق صفحات صالح.',
            'no-valid-range': 'لم يتم العثور على نطاقات صفحات صالحة.'
        }
    };

    // Default language
    let currentLanguage = 'en';

    // Language selector functionality
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            setLanguage(lang);
            
            // Update active class
            langButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    // Function to change language
    function setLanguage(lang) {
        currentLanguage = lang;
        document.documentElement.lang = lang;
        
        // Update all text elements with translations
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        // Update placeholders
        document.querySelectorAll('[data-lang-key-placeholder]').forEach(element => {
            const key = element.getAttribute('data-lang-key-placeholder');
            if (translations[lang][key]) {
                element.placeholder = translations[lang][key];
            }
        });
        
        // Update select options
        const splitMethodSelect = document.getElementById('split-method');
        if (splitMethodSelect) {
            Array.from(splitMethodSelect.options).forEach(option => {
                const key = option.getAttribute('data-lang-key');
                if (key && translations[lang][key]) {
                    option.textContent = translations[lang][key];
                }
            });
        }
        
        // Update no files message if present
        const noFilesElements = document.querySelectorAll('.no-files');
        noFilesElements.forEach(element => {
            element.textContent = translations[lang]['no-files'];
        });
        
        // Fix text for existing file info
        updateFileInfoText();
        
        // Apply RTL styling for Arabic
        applyRTLStyling();
    }
    
    // Helper function to get translated text
    function getTranslatedText(key) {
        return translations[currentLanguage][key] || key;
    }
    
    // Update file info text when language changes
    function updateFileInfoText() {
        const separateFileInfo = document.getElementById('separate-file-info');
        if (separateFileInfo && separateFileInfo.querySelector('strong') && pdfToSeparate) {
            const filename = separateFileInfo.querySelector('strong').textContent;
            separateFileInfo.innerHTML = `
                <strong>${filename}</strong><br>
                ${getTranslatedText('total-pages')}: ${pdfPageCount}
            `;
        }
    }

    // Add RTL support for Arabic
    function applyRTLStyling() {
        const isRTL = currentLanguage === 'ar';
        document.body.style.direction = isRTL ? 'rtl' : 'ltr';
        document.body.classList.toggle('rtl', isRTL);
        
        // Adjust any specific elements that need RTL adjustments
        const containers = document.querySelectorAll('.container, .tab-content, .form-group');
        containers.forEach(container => {
            container.style.textAlign = isRTL ? 'right' : 'left';
        });
        
        // Adjust form inputs and labels
        const formInputs = document.querySelectorAll('input, select, label');
        formInputs.forEach(input => {
            if (isRTL) {
                input.classList.add('rtl-input');
            } else {
                input.classList.remove('rtl-input');
            }
        });
        
        // Adjust button icons if any (assuming font-awesome or similar)
        const buttonIcons = document.querySelectorAll('button i');
        buttonIcons.forEach(icon => {
            if (icon.classList.contains('fa-arrow-right') || icon.classList.contains('fa-arrow-left')) {
                icon.classList.toggle('fa-arrow-right', !isRTL);
                icon.classList.toggle('fa-arrow-left', isRTL);
            }
        });
    }

    // Initialize active language on page load
    function initializeLanguage() {
        // Get browser language or use default
        const browserLang = navigator.language.split('-')[0];
        const initialLang = translations[browserLang] ? browserLang : 'en';
        
        // Set active class on the correct language button
        document.querySelector(`.lang-btn[data-lang="${initialLang}"]`)?.classList.add('active');
        
        // Apply the language
        setLanguage(initialLang);
    }

    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Create modal for page preview
    const modalContainer = document.createElement('div');
    modalContainer.className = 'modal';
    modalContainer.innerHTML = `
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <div class="modal-body"></div>
        </div>
    `;
    document.body.appendChild(modalContainer);

    const modal = document.querySelector('.modal');
    const modalClose = document.querySelector('.modal-close');
    const modalBody = document.querySelector('.modal-body');

    modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
        modalBody.innerHTML = '';
    });

    // Close modal when clicking outside of modal content
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.remove('active');
            modalBody.innerHTML = '';
        }
    });

    // PDFLib and pdf.js initialization
    const { PDFDocument } = PDFLib;

    // Helper function to render PDF pages
    async function renderPDFPages(pdfBytes, container, options = {}) {
        const pdfjsLib = window.pdfjsLib;
        
        // Load the PDF data
        const loadingTask = pdfjsLib.getDocument({ data: pdfBytes });
        const pdf = await loadingTask.promise;
        const numPages = pdf.numPages;
        
        container.innerHTML = '';
        
        // Render each page
        for (let i = 1; i <= numPages; i++) {
            const pageNumber = i;
            const page = await pdf.getPage(pageNumber);
            
            // Create a container for this page
            const pageItem = document.createElement('div');
            pageItem.className = 'page-item';
            pageItem.dataset.pageIndex = pageNumber - 1;
            
            // Set up canvas for rendering
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            const viewport = page.getViewport({ scale: 1.0 });
            
            // Calculate scale to fit within container
            const containerWidth = 180;
            const scale = containerWidth / viewport.width;
            const scaledViewport = page.getViewport({ scale });
            
            // Set canvas dimensions
            canvas.width = scaledViewport.width;
            canvas.height = scaledViewport.height;
            
            // Render the page
            const renderContext = {
                canvasContext: context,
                viewport: scaledViewport
            };
            
            await page.render(renderContext).promise;
            
            const pageNumberEl = document.createElement('div');
            pageNumberEl.className = 'page-number';
            // Use translated text for page label
            pageNumberEl.textContent = `${getTranslatedText('page-text')} ${i}`;
            
            pageItem.appendChild(canvas);
            pageItem.appendChild(pageNumberEl);
            container.appendChild(pageItem);
            
            // If in rearrange mode, make draggable
            if (options.draggable) {
                pageItem.draggable = true;
                pageItem.addEventListener('dragstart', handleDragStart);
                pageItem.addEventListener('dragend', handleDragEnd);
                pageItem.addEventListener('dragover', handleDragOver);
                pageItem.addEventListener('dragenter', handleDragEnter);
                pageItem.addEventListener('dragleave', handleDragLeave);
                pageItem.addEventListener('drop', handleDrop);
            }
            
            // Add click listener for preview modal
            pageItem.addEventListener('click', async () => {
                modalBody.innerHTML = '';
                modal.classList.add('active');
                
                // Render larger version for modal
                const modalCanvas = document.createElement('canvas');
                const modalContext = modalCanvas.getContext('2d');
                
                // Higher scale for modal view
                const modalScale = 1.5;
                const modalViewport = page.getViewport({ scale: modalScale });
                
                modalCanvas.width = modalViewport.width;
                modalCanvas.height = modalViewport.height;
                
                const modalRenderContext = {
                    canvasContext: modalContext,
                    viewport: modalViewport
                };
                
                await page.render(modalRenderContext).promise;
                modalBody.appendChild(modalCanvas);
            });
        }
        
        return numPages;
    }

    // ====== MERGE PDFs FUNCTIONALITY ======
    const mergeFileInput = document.getElementById('merge-file-input');
    const mergeFileList = document.getElementById('merge-file-list');
    const mergeButton = document.getElementById('merge-button');
    
    let filesToMerge = [];

    mergeFileInput.addEventListener('change', async (e) => {
        const selectedFiles = Array.from(e.target.files);
        
        // Add selected files to the array
        for (const file of selectedFiles) {
            if (file.type === 'application/pdf') {
                const fileIndex = filesToMerge.length;
                filesToMerge.push({
                    file: file,
                    order: fileIndex + 1
                });
            }
        }
        
        // Update UI
        updateMergeFileList();
        mergeButton.disabled = filesToMerge.length < 2;
    });

    function updateMergeFileList() {
        mergeFileList.innerHTML = '';
        
        if (filesToMerge.length === 0) {
            mergeFileList.innerHTML = `<div class="no-files">${getTranslatedText('no-files')}</div>`;
            return;
        }

        // Sort files by order
        filesToMerge.sort((a, b) => a.order - b.order);
        
        filesToMerge.forEach((fileObj, index) => {
            const fileItem = document.createElement('div');
            fileItem.className = 'file-item';
            
            const fileName = document.createElement('div');
            fileName.className = 'file-name';
            fileName.textContent = fileObj.file.name;
            
            const fileActions = document.createElement('div');
            fileActions.className = 'file-actions';
            
            // Move up button
            if (index > 0) {
                const moveUpBtn = document.createElement('button');
                moveUpBtn.innerHTML = '↑';
                moveUpBtn.title = 'Move Up';
                moveUpBtn.addEventListener('click', () => {
                    // Swap order with previous file
                    const temp = filesToMerge[index].order;
                    filesToMerge[index].order = filesToMerge[index - 1].order;
                    filesToMerge[index - 1].order = temp;
                    updateMergeFileList();
                });
                fileActions.appendChild(moveUpBtn);
            }
            
            // Move down button
            if (index < filesToMerge.length - 1) {
                const moveDownBtn = document.createElement('button');
                moveDownBtn.innerHTML = '↓';
                moveDownBtn.title = 'Move Down';
                moveDownBtn.addEventListener('click', () => {
                    // Swap order with next file
                    const temp = filesToMerge[index].order;
                    filesToMerge[index].order = filesToMerge[index + 1].order;
                    filesToMerge[index + 1].order = temp;
                    updateMergeFileList();
                });
                fileActions.appendChild(moveDownBtn);
            }
            
            // Remove button
            const removeBtn = document.createElement('button');
            removeBtn.className = 'remove-file';
            removeBtn.innerHTML = '×';
            removeBtn.title = 'Remove';
            removeBtn.addEventListener('click', () => {
                filesToMerge.splice(index, 1);
                // Reorder the remaining files
                filesToMerge.forEach((file, i) => {
                    file.order = i + 1;
                });
                updateMergeFileList();
                mergeButton.disabled = filesToMerge.length < 2;
            });
            
            fileActions.appendChild(removeBtn);
            fileItem.appendChild(fileName);
            fileItem.appendChild(fileActions);
            mergeFileList.appendChild(fileItem);
        });
    }

    mergeButton.addEventListener('click', async () => {
        try {
            mergeButton.disabled = true;
            mergeButton.textContent = getTranslatedText('processing');
            
            // Create a new PDF document
            const mergedPdf = await PDFDocument.create();
            
            // Process each file
            for (const fileObj of filesToMerge) {
                const fileArrayBuffer = await fileObj.file.arrayBuffer();
                const pdfDoc = await PDFDocument.load(fileArrayBuffer);
                const pages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
                
                // Add all pages to the new document
                pages.forEach(page => {
                    mergedPdf.addPage(page);
                });
            }
            
            // Save the merged PDF
            const mergedPdfBytes = await mergedPdf.save();
            
            // Download the merged PDF
            downloadPDF(mergedPdfBytes, 'merged_document.pdf');
            
            mergeButton.textContent = getTranslatedText('merge-button');
            mergeButton.disabled = false;
        } catch (error) {
            console.error('Error merging PDFs:', error);
            alert(getTranslatedText('error-merging'));
            mergeButton.textContent = getTranslatedText('merge-button');
            mergeButton.disabled = false;
        }
    });

    // ====== SEPARATE PDF FUNCTIONALITY ======
    const separateFileInput = document.getElementById('separate-file-input');
    const separateFileInfo = document.getElementById('separate-file-info');
    const separateButton = document.getElementById('separate-button');
    const splitMethodSelect = document.getElementById('split-method');
    const rangeInputs = document.getElementById('range-inputs');
    const pageRangeInput = document.getElementById('page-range');
    
    // Create a container for page previews in separate tab
    const separatePreviewContainer = document.createElement('div');
    separatePreviewContainer.id = 'separate-page-previews';
    separatePreviewContainer.className = 'page-list';
    separateFileInfo.parentNode.insertBefore(separatePreviewContainer, separateFileInfo.nextSibling);
    
    let pdfToSeparate = null;
    let pdfPageCount = 0;
    let separatePdfBytes = null;

    separateFileInput.addEventListener('change', async (e) => {
        if (e.target.files.length === 0) return;
        
        const file = e.target.files[0];
        if (file.type !== 'application/pdf') {
            alert(getTranslatedText('select-pdf'));
            return;
        }
        
        try {
            separatePreviewContainer.innerHTML = `<div class="loading">${getTranslatedText('loading-previews')}</div>`;
            
            const fileArrayBuffer = await file.arrayBuffer();
            separatePdfBytes = new Uint8Array(fileArrayBuffer);
            const pdfDoc = await PDFDocument.load(fileArrayBuffer);
            
            pdfToSeparate = file;
            pdfPageCount = pdfDoc.getPageCount();
            
            // Update UI
            separateFileInfo.innerHTML = `
                <strong>${file.name}</strong><br>
                ${getTranslatedText('total-pages')}: ${pdfPageCount}
            `;
            
            // Render PDF previews
            await renderPDFPages(separatePdfBytes, separatePreviewContainer);
            
            separateButton.disabled = false;
        } catch (error) {
            console.error('Error loading PDF:', error);
            alert(getTranslatedText('error-loading'));
            separatePreviewContainer.innerHTML = '';
        }
    });

    splitMethodSelect.addEventListener('change', () => {
        if (splitMethodSelect.value === 'range') {
            rangeInputs.classList.remove('hidden');
        } else {
            rangeInputs.classList.add('hidden');
        }
    });

    separateButton.addEventListener('click', async () => {
        if (!pdfToSeparate) return;
        
        try {
            separateButton.disabled = true;
            separateButton.textContent = getTranslatedText('processing');
            
            const fileArrayBuffer = await pdfToSeparate.arrayBuffer();
            const pdfDoc = await PDFDocument.load(fileArrayBuffer);
            
            if (splitMethodSelect.value === 'all') {
                // Extract each page as a separate PDF
                for (let i = 0; i < pdfPageCount; i++) {
                    const newPdf = await PDFDocument.create();
                    const [page] = await newPdf.copyPages(pdfDoc, [i]);
                    newPdf.addPage(page);
                    
                    const newPdfBytes = await newPdf.save();
                    downloadPDF(newPdfBytes, `page_${i + 1}.pdf`);
                }
            } else if (splitMethodSelect.value === 'range') {
                // Extract specific page ranges
                const rangeText = pageRangeInput.value.trim();
                if (!rangeText) {
                    alert(getTranslatedText('valid-range'));
                    separateButton.disabled = false;
                    separateButton.textContent = getTranslatedText('split-button');
                    return;
                }
                
                const pageIndices = parsePageRanges(rangeText, pdfPageCount);
                if (pageIndices.length === 0) {
                    alert(getTranslatedText('no-valid-range'));
                    separateButton.disabled = false;
                    separateButton.textContent = getTranslatedText('split-button');
                    return;
                }
                
                const newPdf = await PDFDocument.create();
                const pages = await newPdf.copyPages(pdfDoc, pageIndices);
                
                pages.forEach(page => {
                    newPdf.addPage(page);
                });
                
                const newPdfBytes = await newPdf.save();
                downloadPDF(newPdfBytes, `extracted_pages.pdf`);
            }
            
            separateButton.disabled = false;
            separateButton.textContent = getTranslatedText('split-button');
        } catch (error) {
            console.error('Error separating PDF:', error);
            alert(getTranslatedText('error-splitting'));
            separateButton.disabled = false;
            separateButton.textContent = getTranslatedText('split-button');
        }
    });

    function parsePageRanges(rangeText, maxPages) {
        const pageIndices = [];
        const parts = rangeText.split(',');
        
        for (const part of parts) {
            const trimmedPart = part.trim();
            
            if (trimmedPart.includes('-')) {
                // Range of pages (e.g., "1-3")
                const [start, end] = trimmedPart.split('-').map(num => parseInt(num.trim()));
                
                if (isNaN(start) || isNaN(end) || start < 1 || end > maxPages || start > end) {
                    continue;
                }
                
                for (let i = start; i <= end; i++) {
                    pageIndices.push(i - 1); // Convert to 0-based index
                }
            } else {
                // Single page (e.g., "5")
                const pageNum = parseInt(trimmedPart);
                
                if (isNaN(pageNum) || pageNum < 1 || pageNum > maxPages) {
                    continue;
                }
                
                pageIndices.push(pageNum - 1); // Convert to 0-based index
            }
        }
        
        // Remove duplicates and sort
        return [...new Set(pageIndices)].sort((a, b) => a - b);
    }

    // ====== REARRANGE PAGES FUNCTIONALITY ======
    const rearrangeFileInput = document.getElementById('rearrange-file-input');
    const pagePreviews = document.getElementById('page-previews');
    const rearrangeButton = document.getElementById('rearrange-button');
    
    let pdfToRearrange = null;
    let rearrangePdfBytes = null;
    let rearrangedPages = [];

    rearrangeFileInput.addEventListener('change', async (e) => {
        if (e.target.files.length === 0) return;
        
        const file = e.target.files[0];
        if (file.type !== 'application/pdf') {
            alert(getTranslatedText('select-pdf'));
            return;
        }
        
        try {
            pagePreviews.innerHTML = `<div class="loading">${getTranslatedText('loading-previews')}</div>`;
            
            const fileArrayBuffer = await file.arrayBuffer();
            rearrangePdfBytes = new Uint8Array(fileArrayBuffer);
            const pdfDoc = await PDFDocument.load(fileArrayBuffer);
            pdfToRearrange = pdfDoc;
            
            const pageCount = pdfDoc.getPageCount();
            
            // Reset rearranged pages array
            rearrangedPages = Array.from({ length: pageCount }, (_, i) => i);
            
            // Render actual PDF page previews
            await renderPDFPages(rearrangePdfBytes, pagePreviews, { draggable: true });
            
            rearrangeButton.disabled = false;
        } catch (error) {
            console.error('Error loading PDF for rearrangement:', error);
            alert(getTranslatedText('error-loading'));
            pagePreviews.innerHTML = '';
        }
    });

    // Drag and drop functionality for page rearrangement
    let draggedItem = null;

    function handleDragStart(e) {
        this.classList.add('dragging');
        draggedItem = this;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', this.dataset.pageIndex);
    }

    function handleDragEnd(e) {
        this.classList.remove('dragging');
    }

    function handleDragOver(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    }

    function handleDragEnter(e) {
        e.preventDefault();
        this.classList.add('drag-over');
    }

    function handleDragLeave(e) {
        this.classList.remove('drag-over');
    }

    function handleDrop(e) {
        e.preventDefault();
        this.classList.remove('drag-over');

        if (draggedItem === this) return;

        const fromIndex = parseInt(draggedItem.dataset.pageIndex);
        const toIndex = parseInt(this.dataset.pageIndex);

        // Update the rearranged pages array
        const [movedPage] = rearrangedPages.splice(fromIndex, 1);
        rearrangedPages.splice(toIndex, 0, movedPage);

        // Reorder DOM elements
        if (fromIndex < toIndex) {
            pagePreviews.insertBefore(draggedItem, this.nextSibling);
        } else {
            pagePreviews.insertBefore(draggedItem, this);
        }

        // Update data-page-index attributes for all page items
        const pageItems = Array.from(pagePreviews.querySelectorAll('.page-item'));
        pageItems.forEach((item, index) => {
            item.dataset.pageIndex = index;

            // Update page number text
            const pageNumberElement = item.querySelector('.page-number');
            if (pageNumberElement) {
                pageNumberElement.textContent = `${getTranslatedText('page-text')} ${index + 1}`;
            }
        });
    }

    rearrangeButton.addEventListener('click', async () => {
        if (!pdfToRearrange) return;

        try {
            rearrangeButton.disabled = true;
            rearrangeButton.textContent = getTranslatedText('processing');

            // Create a new PDF with rearranged pages
            const newPdf = await PDFDocument.create();

            // Copy pages in the new order
            for (const pageIndex of rearrangedPages) {
                const [page] = await newPdf.copyPages(pdfToRearrange, [pageIndex]);
                newPdf.addPage(page);
            }

// Save and download the rearranged PDF
const newPdfBytes = await newPdf.save();
downloadPDF(newPdfBytes, 'rearranged_document.pdf');

rearrangeButton.disabled = false;
rearrangeButton.textContent = getTranslatedText('rearrange-button');
} catch (error) {
console.error('Error rearranging PDF:', error);
alert(getTranslatedText('error-rearranging'));
rearrangeButton.disabled = false;
rearrangeButton.textContent = getTranslatedText('rearrange-button');
}
});

// Helper function to download PDF
function downloadPDF(bytes, filename) {
const blob = new Blob([bytes], { type: 'application/pdf' });
const url = URL.createObjectURL(blob);

const link = document.createElement('a');
link.href = url;
link.download = filename;
link.click();

setTimeout(() => {
URL.revokeObjectURL(url);
}, 100);
}
initializeLanguage();
});