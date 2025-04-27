document.addEventListener('DOMContentLoaded', function() {
    // Language translations
    const translations = {
        'en': {
            'editor-title': 'PDF Editor',
            'merge-tab': 'Merge PDFs',
            'separate-tab': 'Split PDF',
            'rearrange-tab': 'Rearrange Pages',
            'images-tab': 'Images to PDF',
            'nup-tab': 'N-Up Pages',
            'merge-title': 'Merge PDFs',
            'merge-select': 'Select PDFs to Merge',
            'merge-drag': 'Or drag and drop PDF files here',
            'merge-button': 'Merge PDFs',
            'reorder-file': 'reorder-file',
            'remove-file': 'remove-file',
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
            'no-valid-range': 'No valid page ranges found.',
            'images-title': 'Images to PDF',
            'images-select': 'Select Images',
            'images-drag': 'Or drag and drop image files here',
            'images-button': 'Create PDF',
            'page-size': 'Page Size:',
            'size-a4': 'A4',
            'size-letter': 'Letter',
            'size-fit': 'Fit to Image',
            'page-orientation': 'Orientation:',
            'orientation-portrait': 'Portrait',
            'orientation-landscape': 'Landscape',
            'orientation-auto': 'Auto (Based on Image)',
            'error-image-conversion': 'Error converting images to PDF. Please try again.',
            'no-images': 'No images selected',
            'loading-images': 'Loading images...',
            'image-text': 'Image',
            'nup-title': 'N-Up Pages',
            'nup-select': 'Select PDF',
            'nup-drag': 'Or drag and drop a PDF file here',
            'nup-layout': 'Layout:',
            'nup-2x1': '2-Up Horizontal (2×1)',
            'nup-1x2': '2-Up Vertical (1×2)',
            'nup-2x2': '4-Up (2×2)',
            'nup-direction': 'Page Order:',
            'nup-ltr': 'Left to Right',
            'nup-rtl': 'Right to Left',
            'nup-button': 'Create N-Up PDF',
            'error-nup': 'Error creating N-Up PDF. Please try again.'
        },
        'ar': {
            'editor-title': 'محرر PDF',
            'merge-tab': 'دمج ملفات PDF',
            'separate-tab': 'تقسيم PDF',
            'rearrange-tab': 'إعادة ترتيب الصفحات',
            'images-tab': 'صور إلى PDF',
            'nup-tab': 'دمج الصفحات',
            'merge-title': 'دمج ملفات PDF',
            'merge-select': 'حدد ملفات PDF للدمج',
            'merge-drag': 'أو اسحب وأفلت ملفات PDF هنا',
            'merge-button': 'دمج ملفات PDF',
            'reorder-file': 'إعادة ترتيب',
            'remove-file': "حذف الملف",
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
            'no-valid-range': 'لم يتم العثور على نطاقات صفحات صالحة.',
            'images-title': 'تحويل الصور إلى PDF',
            'images-select': 'اختر الصور',
            'images-drag': 'أو اسحب وأفلت ملفات الصور هنا',
            'images-button': 'إنشاء PDF',
            'page-size': 'حجم الصفحة:',
            'size-a4': 'A4',
            'size-letter': 'Letter',
            'size-fit': 'ملائم للصورة',
            'page-orientation': 'الاتجاه:',
            'orientation-portrait': 'عمودي',
            'orientation-landscape': 'أفقي',
            'orientation-auto': 'تلقائي (حسب الصورة)',
            'error-image-conversion': 'خطأ في تحويل الصور إلى PDF. يرجى المحاولة مرة أخرى.',
            'no-images': 'لم يتم تحديد صور',
            'loading-images': 'جاري تحميل الصور...',
            'image-text': 'صورة',
            'nup-title': 'دمج الصفحات',
            'nup-select': 'اختر ملف PDF',
            'nup-drag': 'أو اسحب وأفلت ملف PDF هنا',
            'nup-layout': 'التخطيط:',
            'nup-2x1': '2- أفقي (2×1)',
            'nup-1x2': '2- عمودي (1×2)',
            'nup-2x2': '4- (2×2)',
            'nup-direction': 'ترتيب الصفحات:',
            'nup-ltr': 'من اليسار إلى اليمين',
            'nup-rtl': 'من اليمين إلى اليسار',
            'nup-button': 'إنشاء PDF مدمج',
            'error-nup': 'خطأ في إنشاء PDF مدمج. يرجى المحاولة مرة أخرى.'
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
        document.querySelectorAll('select').forEach(select => {
            Array.from(select.options).forEach(option => {
                const key = option.getAttribute('data-lang-key');
                if (key && translations[lang][key]) {
                    option.textContent = translations[lang][key];
                }
            });
        });
        
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
        
        const nupFileInfo = document.getElementById('nup-file-info');
        if (nupFileInfo && nupFileInfo.querySelector('strong') && pdfForNup) {
            const filename = nupFileInfo.querySelector('strong').textContent;
            nupFileInfo.innerHTML = `
                <strong>${filename}</strong><br>
                ${getTranslatedText('total-pages')}: ${nupPageCount}
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
        
        // Adjust button icons if any
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
            
            // Add checkbox for page selection if needed
            if (options.selectable) {
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.className = 'page-select';
                checkbox.checked = true; // Default selected
                checkbox.dataset.pageIndex = pageNumber - 1;
                pageItem.appendChild(checkbox);
            }
            
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
            pageItem.addEventListener('click', async (e) => {
                // Don't open modal if clicking on checkbox
                if (e.target.type === 'checkbox') return;
                
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

    // change active dots ----------------
function test() {

    const tabsContainer = document.querySelector('.tabs');
    const tabButtons = Array.from(document.querySelectorAll('.tab-button'));
    const tabDots = Array.from(document.querySelectorAll('.tab-dot'));
    let activeIndex = 0; // Track which tab is active
    
    // Update active dot based on visible tabs and active tab
    function updateActiveDot() {
      // Find the active tab index
      activeIndex = tabButtons.findIndex(tab => tab.classList.contains('active'));
      
      // Update dots to match active tab
      tabDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === activeIndex);
      });
      
    }
    
    // Enable clicking on dots to scroll to corresponding tab and make that tab active
    tabDots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        // Remove active class from all tabs
        tabButtons.forEach(tab => tab.classList.remove('active'));
        
        // Add active class to the tab corresponding to the clicked dot
        tabButtons[index].classList.add('active');
        
        // Scroll to the tab
        tabsContainer.scrollTo({
          left: tabButtons[index].offsetLeft - (tabsContainer.offsetWidth / 2) + (tabButtons[index].offsetWidth / 2),
          behavior: 'smooth'
        });
        
        // Update dots (though this happens in updateActiveDot too)
        updateActiveDot();
        
      });
    });
    
    // Make tabs update the dots when clicked
    tabButtons.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        // Remove active class from all tabs
        tabButtons.forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked tab
        tab.classList.add('active');
        
        // Update dots
        updateActiveDot();
      });
    });
    
    // Update on scroll and resize
    tabsContainer.addEventListener('scroll', updateActiveDot);
    window.addEventListener('resize', updateActiveDot);
    
    // Initial update
    updateActiveDot();
}

test()


    
// ====== MERGE PDFs FUNCTIONALITY ======
const mergeFileInput = document.getElementById('merge-file-input');
const mergeFileList = document.getElementById('merge-file-list');
const mergeButton = document.getElementById('merge-button');

let filesToMerge = [];

// Handle file selection for merging
mergeFileInput.addEventListener('change', async (e) => {
    const newFiles = Array.from(e.target.files);
    if (newFiles.length === 0) return;
    
    // Add new files to our array
    filesToMerge = [...filesToMerge, ...newFiles];
    
    // Update UI
    updateMergeFileList();
    
    // Enable merge button if files are selected
    if (filesToMerge.length > 0) {
        mergeButton.disabled = false;
    }
});

// Update the file list UI
function updateMergeFileList() {
    mergeFileList.innerHTML = '';
    
    if (filesToMerge.length === 0) {
        const noFiles = document.createElement('div');
        noFiles.className = 'no-files';
        noFiles.textContent = getTranslatedText('no-files');
        mergeFileList.appendChild(noFiles);
        return;
    }
    
    filesToMerge.forEach((file, index) => {
        const fileItem = document.createElement('div');
        fileItem.className = 'file-item';
        
        // Create file type indicator
        const fileTypeIndicator = document.createElement('div');
        fileTypeIndicator.className = 'file-type-indicator';
        fileTypeIndicator.textContent = 'PDF';
        
        // Create the file name container
        const fileName = document.createElement('div');
        fileName.className = 'file-name';
        fileName.appendChild(fileTypeIndicator);
        
        // Create text node for file name
        const fileNameText = document.createElement('span');
        fileNameText.textContent = file.name;
        fileName.appendChild(fileNameText);
        
        // Create actions container
        const fileActions = document.createElement('div');
        fileActions.className = 'file-actions';
        
        // Create move/reorder button for drag functionality
        const moveButton = document.createElement('button');
        moveButton.className = 'file-move';
        moveButton.setAttribute('data-tooltip', getTranslatedText('reorder-file'));
        moveButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>';
        
        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.className = 'remove-file';
        removeButton.setAttribute('data-tooltip', getTranslatedText('remove-file'));
        removeButton.textContent = '×'; 

removeButton.addEventListener('click', () => {
    filesToMerge.splice(index, 1);
    updateMergeFileList();
    if (filesToMerge.length === 0) {
        mergeButton.disabled = true;
    }
});
        
        // Add buttons to actions container
        fileActions.appendChild(moveButton);
        fileActions.appendChild(removeButton);
        
        // Add all elements to file item
        fileItem.appendChild(fileName);
        fileItem.appendChild(fileActions);
        mergeFileList.appendChild(fileItem);
    });
    
    // Initialize drag functionality for reordering
    initDragReorder();
}

// Function to initialize drag reordering
function initDragReorder() {
    const fileItems = document.querySelectorAll('#merge-file-list .file-item');
    let draggedItem = null;
    
    fileItems.forEach(item => {
        const moveHandle = item.querySelector('.file-move');
        
        moveHandle.addEventListener('mousedown', function() {
            draggedItem = item;
            item.classList.add('dragging');
            
            // Add event listeners for drag movement and completion
            document.addEventListener('mousemove', dragMove);
            document.addEventListener('mouseup', dragEnd);
        });
    });
    
    function dragMove(e) {
        if (!draggedItem) return;
        
        const fileList = document.getElementById('merge-file-list');
        const fileItems = Array.from(fileList.querySelectorAll('.file-item:not(.dragging)'));
        
        // Find the item we're dragging over
        const afterElement = fileItems.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = e.clientY - box.top - box.height / 2;
            
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element;
        
        if (afterElement) {
            fileList.insertBefore(draggedItem, afterElement);
        } else {
            fileList.appendChild(draggedItem);
        }
        
        // Update the filesToMerge array to match the new order
        updateFilesArray();
    }
    
    function dragEnd() {
        if (!draggedItem) return;
        
        draggedItem.classList.remove('dragging');
        draggedItem = null;
        
        // Remove event listeners
        document.removeEventListener('mousemove', dragMove);
        document.removeEventListener('mouseup', dragEnd);
    }
    
    function updateFilesArray() {
        const newFilesOrder = [];
        const fileItems = document.querySelectorAll('#merge-file-list .file-item');
        
        fileItems.forEach((item, index) => {
            const fileName = item.querySelector('.file-name span').textContent;
            const fileIndex = filesToMerge.findIndex(file => file.name === fileName);
            if (fileIndex !== -1) {
                newFilesOrder.push(filesToMerge[fileIndex]);
            }
        });
        
        filesToMerge = newFilesOrder;
    }
}

// Implement drag and drop for PDF merging
const mergeDropArea = document.querySelector('#merge .upload-area');

mergeDropArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.stopPropagation();
    mergeDropArea.classList.add('drag-over');
});

mergeDropArea.addEventListener('dragleave', (e) => {
    e.preventDefault();
    e.stopPropagation();
    mergeDropArea.classList.remove('drag-over');
});

mergeDropArea.addEventListener('drop', (e) => {
    e.preventDefault();
    e.stopPropagation();
    mergeDropArea.classList.remove('drag-over');
    
    const droppedFiles = Array.from(e.dataTransfer.files).filter(file => 
        file.type === 'application/pdf'
    );
    
    if (droppedFiles.length > 0) {
        filesToMerge = [...filesToMerge, ...droppedFiles];
        updateMergeFileList();
        mergeButton.disabled = false;
    }
});

// Merge PDFs button functionality
mergeButton.addEventListener('click', async () => {
    if (filesToMerge.length === 0) return;
    
    try {
        mergeButton.disabled = true;
        mergeButton.textContent = getTranslatedText('processing');
        
        // Create a new PDF document
        const mergedPdf = await PDFDocument.create();
        
        // For each file, load it and copy its pages to the new document
        for (const file of filesToMerge) {
            const fileArrayBuffer = await file.arrayBuffer();
            const pdf = await PDFDocument.load(fileArrayBuffer);
            const pages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
            
            // Add each page to our new document
            pages.forEach(page => {
                mergedPdf.addPage(page);
            });
        }
        
        // Save the merged PDF
        const mergedPdfBytes = await mergedPdf.save();
        
        // Create a download link
        const blob = new Blob([mergedPdfBytes], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'merged.pdf';
        a.click();
        
        // Clean up
        URL.revokeObjectURL(url);
        mergeButton.textContent = getTranslatedText('merge-button');
        mergeButton.disabled = false;
        
    } catch (error) {
        console.error('Error merging PDFs:', error);
        alert(getTranslatedText('error-merging'));
        mergeButton.textContent = getTranslatedText('merge-button');
        mergeButton.disabled = filesToMerge.length === 0;
    }
});

// ====== SPLIT PDF FUNCTIONALITY ======
const separateFileInput = document.getElementById('separate-file-input');
const separateFileInfo = document.getElementById('separate-file-info');
const separateButton = document.getElementById('separate-button');
const splitMethodSelect = document.getElementById('split-method');
const rangeInputs = document.getElementById('range-inputs');
const pageRangeInput = document.getElementById('page-range');

let pdfToSeparate = null;
let pdfPageCount = 0;

// Show/hide range inputs based on split method
splitMethodSelect.addEventListener('change', () => {
    if (splitMethodSelect.value === 'range') {
        rangeInputs.classList.remove('hidden');
    } else {
        rangeInputs.classList.add('hidden');
    }
});

// Handle file selection for splitting
separateFileInput.addEventListener('change', async (e) => {
    if (e.target.files.length === 0) return;
    
    try {
        const file = e.target.files[0];
        pdfToSeparate = file;
        
        // Read the PDF to get page count
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await PDFDocument.load(arrayBuffer);
        pdfPageCount = pdf.getPageCount();
        
        // Update UI
        separateFileInfo.innerHTML = `
            <strong>${file.name}</strong><br>
            ${getTranslatedText('total-pages')}: ${pdfPageCount}
        `;
        
        separateFileInfo.classList.remove('hidden');
        separateButton.disabled = false;
        
    } catch (error) {
        console.error('Error loading PDF:', error);
        alert(getTranslatedText('error-loading'));
        separateFileInfo.innerHTML = '';
        separateFileInfo.classList.add('hidden');
        separateButton.disabled = true;
    }
});

// Implement drag and drop for PDF splitting
const separateDropArea = document.querySelector('#separate .upload-area');

separateDropArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.stopPropagation();
    separateDropArea.classList.add('drag-over');
});

separateDropArea.addEventListener('dragleave', (e) => {
    e.preventDefault();
    e.stopPropagation();
    separateDropArea.classList.remove('drag-over');
});

separateDropArea.addEventListener('drop', async (e) => {
    e.preventDefault();
    e.stopPropagation();
    separateDropArea.classList.remove('drag-over');
    
    const files = Array.from(e.dataTransfer.files).filter(file => 
        file.type === 'application/pdf'
    );
    
    if (files.length > 0) {
        try {
            const file = files[0];
            pdfToSeparate = file;
            
            // Read the PDF to get page count
            const arrayBuffer = await file.arrayBuffer();
            const pdf = await PDFDocument.load(arrayBuffer);
            pdfPageCount = pdf.getPageCount();
            
            // Update UI
            separateFileInfo.innerHTML = `
                <strong>${file.name}</strong><br>
                ${getTranslatedText('total-pages')}: ${pdfPageCount}
            `;
            
            separateFileInfo.classList.remove('hidden');
            separateButton.disabled = false;
            
        } catch (error) {
            console.error('Error loading PDF:', error);
            alert(getTranslatedText('error-loading'));
            separateFileInfo.innerHTML = '';
            separateFileInfo.classList.add('hidden');
            separateButton.disabled = true;
        }
    }
});

// Parse page range input
function parsePageRanges(rangeString, maxPages) {
    const ranges = [];
    const parts = rangeString.split(',');
    
    for (const part of parts) {
        part.trim();
        if (part.includes('-')) {
            // Handle range like "1-5"
            const [start, end] = part.split('-').map(n => parseInt(n.trim(), 10));
            
            if (isNaN(start) || isNaN(end) || start < 1 || end > maxPages || start > end) {
                continue;
            }
            
            // PDF page indices are 0-based, but user input is 1-based
            ranges.push({ start: start - 1, end: end - 1 });
        } else {
            // Handle single page like "3"
            const pageNum = parseInt(part.trim(), 10);
            
            if (isNaN(pageNum) || pageNum < 1 || pageNum > maxPages) {
                continue;
            }
            
            ranges.push({ start: pageNum - 1, end: pageNum - 1 });
        }
    }
    
    return ranges;
}

// Split PDF button functionality
separateButton.addEventListener('click', async () => {
    if (!pdfToSeparate) {
        alert(getTranslatedText('select-pdf'));
        return;
    }
    
    try {
        separateButton.disabled = true;
        separateButton.textContent = getTranslatedText('processing');
        
        const arrayBuffer = await pdfToSeparate.arrayBuffer();
        const pdf = await PDFDocument.load(arrayBuffer);
        const splitMethod = splitMethodSelect.value;
        
        // Handle different split methods
        if (splitMethod === 'all') {
            // Extract all pages as separate PDFs
            for (let i = 0; i < pdfPageCount; i++) {
                const newPdf = await PDFDocument.create();
                const [page] = await newPdf.copyPages(pdf, [i]);
                newPdf.addPage(page);
                
                const newPdfBytes = await newPdf.save();
                
                // Create download link
                const blob = new Blob([newPdfBytes], { type: 'application/pdf' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `page_${i + 1}.pdf`;
                a.click();
                URL.revokeObjectURL(url);
            }
        } else if (splitMethod === 'range') {
            // Extract specific page ranges
            const rangeValue = pageRangeInput.value.trim();
            if (!rangeValue) {
                alert(getTranslatedText('valid-range'));
                separateButton.textContent = getTranslatedText('split-button');
                separateButton.disabled = false;
                return;
            }
            
            const ranges = parsePageRanges(rangeValue, pdfPageCount);
            if (ranges.length === 0) {
                alert(getTranslatedText('no-valid-range'));
                separateButton.textContent = getTranslatedText('split-button');
                separateButton.disabled = false;
                return;
            }
            
            // Create PDF for each range
            for (let i = 0; i < ranges.length; i++) {
                const range = ranges[i];
                const newPdf = await PDFDocument.create();
                
                // Get pages in this range
                const pageIndices = [];
                for (let j = range.start; j <= range.end; j++) {
                    pageIndices.push(j);
                }
                
                const pages = await newPdf.copyPages(pdf, pageIndices);
                
                // Add pages to new PDF
                pages.forEach(page => {
                    newPdf.addPage(page);
                });
                
                const newPdfBytes = await newPdf.save();
                
                // Create download link
                const blob = new Blob([newPdfBytes], { type: 'application/pdf' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `pages_${range.start + 1}-${range.end + 1}.pdf`;
                a.click();
                URL.revokeObjectURL(url);
            }
        }
        
        separateButton.textContent = getTranslatedText('split-button');
        separateButton.disabled = false;
        
    } catch (error) {
        console.error('Error splitting PDF:', error);
        alert(getTranslatedText('error-splitting'));
        separateButton.textContent = getTranslatedText('split-button');
        separateButton.disabled = false;
    }
});

// ====== REARRANGE PAGES FUNCTIONALITY ======
const rearrangeFileInput = document.getElementById('rearrange-file-input');
const pagePreviews = document.getElementById('page-previews');
const rearrangeButton = document.getElementById('rearrange-button');

let pdfToRearrange = null;
let rearrangedPages = [];

// Drag and drop functionality for page rearrangement
let draggedItem = null;

function handleDragStart(e) {
    draggedItem = this;
    this.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragEnd(e) {
    this.classList.remove('dragging');
    document.querySelectorAll('.page-item').forEach(item => {
        item.classList.remove('drag-over');
    });
}

function handleDragOver(e) {
    e.preventDefault();
    return false;
}

function handleDragEnter(e) {
    this.classList.add('drag-over');
}

function handleDragLeave(e) {
    this.classList.remove('drag-over');
}

function handleDrop(e) {
    e.stopPropagation();
    e.preventDefault();
    
    if (draggedItem !== this) {
        // Get positions
        const allItems = Array.from(document.querySelectorAll('#page-previews .page-item'));
        const fromIndex = allItems.indexOf(draggedItem);
        const toIndex = allItems.indexOf(this);
        
        // Update rearrangedPages array
        const movedPage = rearrangedPages[fromIndex];
        rearrangedPages.splice(fromIndex, 1);
        rearrangedPages.splice(toIndex, 0, movedPage);
        
        // Update DOM
        if (fromIndex < toIndex) {
            this.parentNode.insertBefore(draggedItem, this.nextSibling);
        } else {
            this.parentNode.insertBefore(draggedItem, this);
        }
        
        // Update page numbers
        updatePageNumbers();
    }
    
    this.classList.remove('drag-over');
    return false;
}

// Update page numbers after rearrangement
function updatePageNumbers() {
    const pageItems = document.querySelectorAll('#page-previews .page-item');
    pageItems.forEach((item, index) => {
        const pageNumber = item.querySelector('.page-number');
        pageNumber.textContent = `${getTranslatedText('page-text')} ${index + 1}`;
    });
}

// Handle file selection for rearrangement
rearrangeFileInput.addEventListener('change', async (e) => {
    if (e.target.files.length === 0) return;
    
    try {
        pagePreviews.innerHTML = `<div class="loading">${getTranslatedText('loading-previews')}</div>`;
        
        const file = e.target.files[0];
        pdfToRearrange = file;
        
        // Read the PDF
        const arrayBuffer = await file.arrayBuffer();
        
        // Render page previews
        const pageCount = await renderPDFPages(arrayBuffer, pagePreviews, { draggable: true });
        
        // Initialize rearrangedPages array with sequential indices
        rearrangedPages = Array.from({ length: pageCount }, (_, i) => i);
        
        rearrangeButton.disabled = false;
        
    } catch (error) {
        console.error('Error loading PDF:', error);
        alert(getTranslatedText('error-loading'));
        pagePreviews.innerHTML = '';
        rearrangeButton.disabled = true;
    }
});

// Implement drag and drop for PDF rearrangement
const rearrangeDropArea = document.querySelector('#rearrange .upload-area');

rearrangeDropArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.stopPropagation();
    rearrangeDropArea.classList.add('drag-over');
});

rearrangeDropArea.addEventListener('dragleave', (e) => {
    e.preventDefault();
    e.stopPropagation();
    rearrangeDropArea.classList.remove('drag-over');
});

rearrangeDropArea.addEventListener('drop', async (e) => {
    e.preventDefault();
    e.stopPropagation();
    rearrangeDropArea.classList.remove('drag-over');
    
    const files = Array.from(e.dataTransfer.files).filter(file => 
        file.type === 'application/pdf'
    );
    
    if (files.length > 0) {
        try {
            pagePreviews.innerHTML = `<div class="loading">${getTranslatedText('loading-previews')}</div>`;
            
            const file = files[0];
            pdfToRearrange = file;
            
            // Read the PDF
            const arrayBuffer = await file.arrayBuffer();
            
            // Render page previews
            const pageCount = await renderPDFPages(arrayBuffer, pagePreviews, { draggable: true });
            
            // Initialize rearrangedPages array with sequential indices
            rearrangedPages = Array.from({ length: pageCount }, (_, i) => i);
            
            rearrangeButton.disabled = false;
            
        } catch (error) {
            console.error('Error loading PDF:', error);
            alert(getTranslatedText('error-loading'));
            pagePreviews.innerHTML = '';
            rearrangeButton.disabled = true;
        }
    }
});

// Save rearranged PDF
rearrangeButton.addEventListener('click', async () => {
    if (!pdfToRearrange || rearrangedPages.length === 0) return;
    
    try {
        rearrangeButton.disabled = true;
        rearrangeButton.textContent = getTranslatedText('processing');
        
        const arrayBuffer = await pdfToRearrange.arrayBuffer();
        const pdf = await PDFDocument.load(arrayBuffer);
        
        // Create a new PDF with rearranged pages
        const newPdf = await PDFDocument.create();
        
        // Copy pages in the new order
        for (const pageIndex of rearrangedPages) {
            const [page] = await newPdf.copyPages(pdf, [pageIndex]);
            newPdf.addPage(page);
        }
        
        const newPdfBytes = await newPdf.save();
        
        // Create download link
        const blob = new Blob([newPdfBytes], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'rearranged.pdf';
        a.click();
        URL.revokeObjectURL(url);
        
        rearrangeButton.textContent = getTranslatedText('rearrange-button');
        rearrangeButton.disabled = false;
        
    } catch (error) {
        console.error('Error rearranging PDF:', error);
        alert(getTranslatedText('error-rearranging'));
        rearrangeButton.textContent = getTranslatedText('rearrange-button');
        rearrangeButton.disabled = false;
    }
});

// ====== IMAGES TO PDF FUNCTIONALITY ======
const imagesFileInput = document.getElementById('images-file-input');
const imagePreviews = document.getElementById('image-previews');
const createPdfButton = document.getElementById('create-pdf-button');
const pageSizeSelect = document.getElementById('page-size');
const pageOrientationSelect = document.getElementById('page-orientation');

let imagesToConvert = [];

// Handle file selection for images
imagesFileInput.addEventListener('change', async (e) => {
    const newFiles = Array.from(e.target.files).filter(file => 
        file.type.startsWith('image/')
    );
    
    if (newFiles.length === 0) return;
    
    // Add new files to our array
    imagesToConvert = [...imagesToConvert, ...newFiles];
    
    // Update UI
    updateImagePreviews();
    
    // Enable button if images are selected
    if (imagesToConvert.length > 0) {
        createPdfButton.disabled = false;
    }
});

// Update image previews
async function updateImagePreviews() {
    // Update image previews async function updateImagePreviews() {
        imagePreviews.innerHTML = imagesToConvert.length === 0 ? 
        `<div class="no-files">${getTranslatedText('no-images')}</div>` : 
        `<div class="loading">${getTranslatedText('loading-images')}</div>`;
        
    if (imagesToConvert.length === 0) {
        return;
    }
        
    // Clear the container
    imagePreviews.innerHTML = '';
        
    // Add each image preview
    for (let i = 0; i < imagesToConvert.length; i++) {
        const image = imagesToConvert[i];
                
        // Create image preview element
        const imageItem = document.createElement('div');
        imageItem.className = 'image-item'; // Changed from page-item to image-item
                
        // Create image element
        const img = document.createElement('img');
        img.src = URL.createObjectURL(image);
                
        // Create image number label
        const imageNumber = document.createElement('div');
        imageNumber.className = 'image-number';
        imageNumber.textContent = `${getTranslatedText('image-text')} ${i + 1}`;
                
        // Create actions container
        const imageActions = document.createElement('div');
        imageActions.className = 'image-actions';
                
        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.className = 'remove-image'; // Changed to remove-image class for proper styling
        removeButton.setAttribute('title', getTranslatedText('remove-image'));
        removeButton.addEventListener('click', () => {
            URL.revokeObjectURL(img.src);
            imagesToConvert.splice(i, 1);
            updateImagePreviews();
            if (imagesToConvert.length === 0) {
                createPdfButton.disabled = true;
            }
        });
                
                
        imageActions.appendChild(removeButton);
        imageItem.appendChild(img);
        imageItem.appendChild(imageNumber);
        imageItem.appendChild(imageActions);
        imagePreviews.appendChild(imageItem);
                
    }
}

// Implement drag and drop for image uploads
const imagesDropArea = document.querySelector('#images .upload-area');

imagesDropArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.stopPropagation();
    imagesDropArea.classList.add('drag-over');
});

imagesDropArea.addEventListener('dragleave', (e) => {
    e.preventDefault();
    e.stopPropagation();
    imagesDropArea.classList.remove('drag-over');
});

imagesDropArea.addEventListener('drop', (e) => {
    e.preventDefault();
    e.stopPropagation();
    imagesDropArea.classList.remove('drag-over');
    
    const droppedFiles = Array.from(e.dataTransfer.files).filter(file => 
        file.type.startsWith('image/')
    );
    
    if (droppedFiles.length > 0) {
        imagesToConvert = [...imagesToConvert, ...droppedFiles];
        updateImagePreviews();
        createPdfButton.disabled = false;
    }
});

// Create PDF from images
createPdfButton.addEventListener('click', async () => {
    if (imagesToConvert.length === 0) return;
    
    try {
        createPdfButton.disabled = true;
        createPdfButton.textContent = getTranslatedText('processing');
        
        // Create a new PDF document
        const pdfDoc = await PDFDocument.create();
        
        // Get PDF page size
        const pageSize = pageSizeSelect.value;
        const orientation = pageOrientationSelect.value;
        
        // Get page dimensions
        let pageWidth, pageHeight;
        
        if (pageSize === 'A4') {
            if (orientation === 'portrait') {
                pageWidth = 595;
                pageHeight = 842;
            } else {
                pageWidth = 842;
                pageHeight = 595;
            }
        } else if (pageSize === 'Letter') {
            if (orientation === 'portrait') {
                pageWidth = 612;
                pageHeight = 792;
            } else {
                pageWidth = 792;
                pageHeight = 612;
            }
        }
        
        // Process each image
        for (const image of imagesToConvert) {
            try {
                // Create a canvas to safely process the image
                const img = new Image();
                const imageUrl = URL.createObjectURL(image);
                
                // Wait for the image to load
                await new Promise((resolve, reject) => {
                    img.onload = resolve;
                    img.onerror = reject;
                    img.src = imageUrl;
                });
                
                // Create canvas and draw the image
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);
                
                // Get PNG data from canvas
                const pngBytes = await new Promise(resolve => {
                    canvas.toBlob(blob => {
                        const reader = new FileReader();
                        reader.onloadend = () => resolve(reader.result);
                        reader.readAsArrayBuffer(blob);
                    }, 'image/png');
                });
                
                // Clean up
                URL.revokeObjectURL(imageUrl);
                
                // Embed image in PDF
                const embeddedImage = await pdfDoc.embedPng(pngBytes);
                
                // Get image dimensions
                const imgWidth = embeddedImage.width;
                const imgHeight = embeddedImage.height;
                
                // Create a page
                let page;
                
                if (pageSize === 'fit') {
                    // Create a page that fits the image
                    const imgAspectRatio = imgWidth / imgHeight;
                    
                    if (orientation === 'auto') {
                        // Choose orientation based on image aspect ratio
                        if (imgAspectRatio > 1) {
                            // Landscape
                            pageWidth = 842;
                            pageHeight = pageWidth / imgAspectRatio;
                        } else {
                            // Portrait
                            pageHeight = 842;
                            pageWidth = pageHeight * imgAspectRatio;
                        }
                    } else if (orientation === 'landscape') {
                        pageWidth = 842;
                        pageHeight = pageWidth / imgAspectRatio;
                    } else {
                        // Portrait
                        pageHeight = 842;
                        pageWidth = pageHeight * imgAspectRatio;
                    }
                    
                    page = pdfDoc.addPage([pageWidth, pageHeight]);
                    
                    // Draw image to fill the page
                    page.drawImage(embeddedImage, {
                        x: 0,
                        y: 0,
                        width: pageWidth,
                        height: pageHeight
                    });
                } else {
                    // Use standard page size
                    page = pdfDoc.addPage([pageWidth, pageHeight]);
                    
                    // Calculate the dimensions to fit the image on the page with margins
                    const margin = 40;
                    const maxWidth = pageWidth - 2 * margin;
                    const maxHeight = pageHeight - 2 * margin;
                    
                    // Scale image to fit within margins while maintaining aspect ratio
                    let scaledWidth, scaledHeight;
                    const imgAspectRatio = imgWidth / imgHeight;
                    const pageAspectRatio = maxWidth / maxHeight;
                    
                    if (imgAspectRatio > pageAspectRatio) {
                        // Image is wider than page ratio
                        scaledWidth = maxWidth;
                        scaledHeight = scaledWidth / imgAspectRatio;
                    } else {
                        // Image is taller than page ratio
                        scaledHeight = maxHeight;
                        scaledWidth = scaledHeight * imgAspectRatio;
                    }
                    
                    // Center the image on the page
                    const x = margin + (maxWidth - scaledWidth) / 2;
                    const y = margin + (maxHeight - scaledHeight) / 2;
                    
                    // Draw the image
                    page.drawImage(embeddedImage, {
                        x,
                        y,
                        width: scaledWidth,
                        height: scaledHeight
                    });
                }
            } catch (imgError) {
                console.error('Error processing image:', imgError);
                // Continue with next image instead of failing the entire process
                continue;
            }
        }
        
        // Save the PDF
        const pdfBytes = await pdfDoc.save();
        
        // Create download link
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'images_to_pdf.pdf';
        a.click();
        URL.revokeObjectURL(url);
        
        createPdfButton.textContent = getTranslatedText('images-button');
        createPdfButton.disabled = false;
        
    } catch (error) {
        console.error('Error converting images to PDF:', error);
        alert(getTranslatedText('error-image-conversion'));
        createPdfButton.textContent = getTranslatedText('images-button');
        createPdfButton.disabled = false;
    }
});

// ====== N-UP PAGES FUNCTIONALITY (CONTINUED) ======
const nupFileInput = document.getElementById('nup-file-input');
const nupFileInfo = document.getElementById('nup-file-info');
const nupPreviews = document.getElementById('nup-previews');
const nupButton = document.getElementById('nup-button');
const nupLayoutSelect = document.getElementById('nup-layout');
const nupDirectionSelect = document.getElementById('nup-direction');
const nupPageSizeSelect = document.getElementById('nup-page-size');
const nupOrientationSelect = document.getElementById('nup-orientation');
const nupDropArea = document.querySelector('#nup .upload-area');
const nupFinalPreviewContainer = document.querySelector('.nup-final-preview-container');
const nupFinalPreview = document.getElementById('nup-final-preview');

let pdfForNup = null;
let nupPageCount = 0;
let nupPages = [];

// Handle file selection for N-Up
nupFileInput.addEventListener('change', async (e) => {
    if (e.target.files.length === 0) return;
    
    try {
        nupPreviews.innerHTML = `<div class="loading">${getTranslatedText('loading-previews')}</div>`;
        nupFinalPreviewContainer.style.display = 'none'; // Hide preview until pages are loaded
        
        const file = e.target.files[0];
        pdfForNup = file;
        
        // Read the PDF
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await PDFDocument.load(arrayBuffer);
        nupPageCount = pdf.getPageCount();
        
        // Update UI
        nupFileInfo.innerHTML = `
            <strong>${file.name}</strong><br>
            ${getTranslatedText('total-pages')}: ${nupPageCount}
        `;
        
        nupFileInfo.classList.remove('hidden');
        
        // Render page previews
        await renderPDFPages(arrayBuffer, nupPreviews, { selectable: true });
        
        // Set up listeners and update preview
        setupPageSelectionListeners();
        updateNupPreview();
        
        // Enable the button
        nupButton.disabled = false;
        
    } catch (error) {
        console.error('Error loading PDF:', error);
        alert(getTranslatedText('error-loading'));
        nupPreviews.innerHTML = '';
        nupFileInfo.innerHTML = '';
        nupFileInfo.classList.add('hidden');
        nupButton.disabled = true;
        nupFinalPreviewContainer.style.display = 'none';
    }
});

// Implement drag and drop for N-Up
nupDropArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.stopPropagation();
    nupDropArea.classList.add('drag-over');
});

nupDropArea.addEventListener('dragleave', (e) => {
    e.preventDefault();
    e.stopPropagation();
    nupDropArea.classList.remove('drag-over');
});

nupDropArea.addEventListener('drop', async (e) => {
    e.preventDefault();
    e.stopPropagation();
    nupDropArea.classList.remove('drag-over');
    
    const files = Array.from(e.dataTransfer.files).filter(file => 
        file.type === 'application/pdf'
    );
    
    if (files.length > 0) {
        try {
            nupPreviews.innerHTML = `<div class="loading">${getTranslatedText('loading-previews')}</div>`;
            nupFinalPreviewContainer.style.display = 'none'; // Hide preview until pages are loaded
            
            const file = files[0];
            pdfForNup = file;
            
            // Read the PDF
            const arrayBuffer = await file.arrayBuffer();
            const pdf = await PDFDocument.load(arrayBuffer);
            nupPageCount = pdf.getPageCount();
            
            // Update UI
            nupFileInfo.innerHTML = `
                <strong>${file.name}</strong><br>
                ${getTranslatedText('total-pages')}: ${nupPageCount}
            `;
            
            nupFileInfo.classList.remove('hidden');
            
            // Render page previews
            await renderPDFPages(arrayBuffer, nupPreviews, { selectable: true });
            
            // Set up listeners and update preview
            setupPageSelectionListeners();
            updateNupPreview();
            
            // Enable the button
            nupButton.disabled = false;
            
        } catch (error) {
            console.error('Error loading PDF:', error);
            alert(getTranslatedText('error-loading'));
            nupPreviews.innerHTML = '';
            nupFileInfo.innerHTML = '';
            nupFileInfo.classList.add('hidden');
            nupButton.disabled = true;
            nupFinalPreviewContainer.style.display = 'none';
        }
    }
});

// Function to update the N-Up preview
function updateNupPreview() {
    if (!pdfForNup || !nupPageCount) return;
    
    // Get layout settings
    const layoutType = nupLayoutSelect.value;
    const direction = nupDirectionSelect.value;
    const pageSize = nupPageSizeSelect.value;
    const orientation = nupOrientationSelect.value;
    
    // Get selected pages
    const selectedCheckboxes = document.querySelectorAll('#nup-previews .page-select:checked');
    const selectedPages = Array.from(selectedCheckboxes).map(checkbox => 
        parseInt(checkbox.dataset.pageIndex)
    );
    
    if (selectedPages.length === 0) {
        nupFinalPreviewContainer.style.display = 'none';
        return;
    }
    
    // Show the preview container
    nupFinalPreviewContainer.style.display = 'block';
    
    // Clear previous preview
    nupFinalPreview.innerHTML = '';
    
    // Determine number of columns and rows based on layout type
    let cols, rows;
    switch (layoutType) {
        case '2x1':
            cols = 2;
            rows = 1;
            break;
        case '1x2':
            cols = 1;
            rows = 2;
            break;
        case '2x2':
            cols = 2;
            rows = 2;
            break;
        default:
            cols = 2;
            rows = 1;
    }
    
    // Set aspect ratio based on page size and orientation
    let aspectRatio;
    if (pageSize === 'A4') {
        aspectRatio = orientation === 'portrait' ? 595/842 : 842/595;
    } else { // Letter
        aspectRatio = orientation === 'portrait' ? 612/792 : 792/612;
    }
    
    // Calculate dimensions for the preview page
    const previewWidth = 300; // Fixed width for preview
    const previewHeight = previewWidth / aspectRatio;
    
    // Process pages in chunks based on the layout
    const pagesPerSheet = cols * rows;
    const totalSheets = Math.ceil(selectedPages.length / pagesPerSheet);
    
    // Create preview for each sheet
    for (let sheetIndex = 0; sheetIndex < totalSheets; sheetIndex++) {
        // Create container for this sheet preview
        const sheetPreview = document.createElement('div');
        sheetPreview.className = 'page-preview';
        sheetPreview.style.width = `${previewWidth}px`;
        sheetPreview.style.height = `${previewHeight}px`;
        
        // Add sheet number
        const sheetNumber = document.createElement('div');
        sheetNumber.className = 'sheet-number';
        sheetNumber.textContent = `Sheet ${sheetIndex + 1}`;
        sheetNumber.style.position = 'absolute';
        sheetNumber.style.top = '5px';
        sheetNumber.style.left = '5px';
        sheetNumber.style.fontSize = '12px';
        sheetNumber.style.color = '#999';
        sheetPreview.appendChild(sheetNumber);
        
        // For each position on the sheet
        for (let posIndex = 0; posIndex < pagesPerSheet; posIndex++) {
            // Calculate the page index based on sheet index and position
            const pageIndex = sheetIndex * pagesPerSheet + posIndex;
            
            // Break if we've processed all selected pages
            if (pageIndex >= selectedPages.length) break;
            
            // Calculate the position for this page on the sheet
            let row, col;
            if (direction === 'ltr') {
                // Left to right, top to bottom
                row = Math.floor(posIndex / cols);
                col = posIndex % cols;
            } else {
                // Right to left, top to bottom
                row = Math.floor(posIndex / cols);
                col = cols - 1 - (posIndex % cols);
            }
            
            // Calculate the subpage dimensions
            const margin = 10;
            const subPageWidth = (previewWidth - margin * (cols + 1)) / cols;
            const subPageHeight = (previewHeight - margin * (rows + 1)) / rows;
            
            const x = margin + col * (subPageWidth + margin);
            const y = margin + row * (subPageHeight + margin);
            
            // Create subpage element
            const subpage = document.createElement('div');
            subpage.className = 'subpage';
            subpage.style.left = `${x}px`;
            subpage.style.top = `${y}px`;
            subpage.style.width = `${subPageWidth}px`;
            subpage.style.height = `${subPageHeight}px`;
            subpage.textContent = `Page ${selectedPages[pageIndex] + 1}`;
            
            sheetPreview.appendChild(subpage);
        }
        
        nupFinalPreview.appendChild(sheetPreview);
    }
}

// Function to set up page selection listeners
function setupPageSelectionListeners() {
    // Find all page selection checkboxes
    const pageCheckboxes = document.querySelectorAll('#nup-previews .page-select');
    
    // Add event listener to each checkbox
    pageCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateNupPreview);
    });
    
    // Add event listener to "Select All" checkbox if it exists
    const selectAllCheckbox = document.querySelector('#nup-select-all');
    if (selectAllCheckbox) {
        selectAllCheckbox.addEventListener('change', updateNupPreview);
    }
}

// Add event listeners for layout option changes
nupLayoutSelect.addEventListener('change', updateNupPreview);
nupDirectionSelect.addEventListener('change', updateNupPreview);
nupPageSizeSelect.addEventListener('change', updateNupPreview);
nupOrientationSelect.addEventListener('change', updateNupPreview);

// Create N-Up PDF
nupButton.addEventListener('click', async () => {
    if (!pdfForNup) {
        alert(getTranslatedText('select-pdf'));
        return;
    }
    
    try {
        nupButton.disabled = true;
        nupButton.textContent = getTranslatedText('processing');
        
        // Get selected pages
        const selectedCheckboxes = document.querySelectorAll('#nup-previews .page-select:checked');
        if (selectedCheckboxes.length === 0) {
            alert(getTranslatedText('select-pdf'));
            nupButton.textContent = getTranslatedText('nup-button');
            nupButton.disabled = false;
            return;
        }
        
        const selectedPages = Array.from(selectedCheckboxes).map(checkbox => 
            parseInt(checkbox.dataset.pageIndex)
        );
        
        // Get layout settings
        const layoutType = nupLayoutSelect.value;
        const direction = nupDirectionSelect.value;
        const pageSize = nupPageSizeSelect.value;
        const orientation = nupOrientationSelect.value;
        
        // Load source PDF
        const arrayBuffer = await pdfForNup.arrayBuffer();
        const sourcePdf = await PDFDocument.load(arrayBuffer);
        
        // Create a new PDF document for the N-Up layout
        const nupPdf = await PDFDocument.create();
        
        // Determine number of columns and rows based on layout type
        let cols, rows;
        switch (layoutType) {
            case '2x1':
                cols = 2;
                rows = 1;
                break;
            case '1x2':
                cols = 1;
                rows = 2;
                break;
            case '2x2':
                cols = 2;
                rows = 2;
                break;
            default:
                cols = 2;
                rows = 1;
        }
        
        // Calculate page dimensions for the new PDF
        let pageWidth, pageHeight;
        if (pageSize === 'A4') {
            if (orientation === 'portrait') {
                pageWidth = 595;
                pageHeight = 842;
            } else {
                pageWidth = 842;
                pageHeight = 595;
            }
        } else if (pageSize === 'Letter') {
            if (orientation === 'portrait') {
                pageWidth = 612;
                pageHeight = 792;
            } else {
                pageWidth = 792;
                pageHeight = 612;
            }
        }
        
        // Calculate dimensions for each sub-page
        const margin = 10; // Margin between pages
        const subPageWidth = (pageWidth - margin * (cols + 1)) / cols;
        const subPageHeight = (pageHeight - margin * (rows + 1)) / rows;
        
        // Process pages in chunks based on the layout
        const pagesPerSheet = cols * rows;
        const totalSheets = Math.ceil(selectedPages.length / pagesPerSheet);
        
        for (let sheetIndex = 0; sheetIndex < totalSheets; sheetIndex++) {
            // Create a new page for this sheet
            const page = nupPdf.addPage([pageWidth, pageHeight]);
            
            // For each position on the sheet
            for (let posIndex = 0; posIndex < pagesPerSheet; posIndex++) {
                // Calculate the page index based on sheet index and position
                const pageIndex = sheetIndex * pagesPerSheet + posIndex;
                
                // Break if we've processed all selected pages
                if (pageIndex >= selectedPages.length) break;
                
                // Get the selected page from the source PDF
                const sourcePage = sourcePdf.getPage(selectedPages[pageIndex]);
                
                // Copy the page to the new PDF
                const [embeddedPage] = await nupPdf.embedPdf(
                    await sourcePdf.save(),
                    [selectedPages[pageIndex]]
                );
                
                // Calculate the position for this page on the sheet
                let row, col;
                if (direction === 'ltr') {
                    // Left to right, top to bottom
                    row = Math.floor(posIndex / cols);
                    col = posIndex % cols;
                } else {
                    // Right to left, top to bottom
                    row = Math.floor(posIndex / cols);
                    col = cols - 1 - (posIndex % cols);
                }
                
                const x = margin + col * (subPageWidth + margin);
                const y = pageHeight - margin - (row + 1) * subPageHeight - row * margin;
                
                // Draw the page at the calculated position
                page.drawPage(embeddedPage, {
                    x,
                    y,
                    width: subPageWidth,
                    height: subPageHeight,
                    keepAspectRatio: true
                });
            }
        }
        
        // Save the N-Up PDF
        const nupPdfBytes = await nupPdf.save();
        
        // Create download link
        const blob = new Blob([nupPdfBytes], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'nup_layout.pdf';
        a.click();
        URL.revokeObjectURL(url);
        
        nupButton.textContent = getTranslatedText('nup-button');
        nupButton.disabled = false;
        
    } catch (error) {
        console.error('Error creating N-Up PDF:', error);
        alert(getTranslatedText('error-nup'));
        nupButton.textContent = getTranslatedText('nup-button');
        nupButton.disabled = false;
    }
});

// Initialize language on page load
initializeLanguage();
})