// Nati Jewelry Theme JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all components
  initializeHeader();
  initializeProductGallery();
  initializeQuantitySelector();
  initializeProductVariants();
  initializeAccordions();
  initializeAjaxCart();
  initializeNewsletterForm();
});

/**
 * Header functionality
 */
function initializeHeader() {
  const header = document.querySelector('.header');
  if (!header) return;

  // Sticky header functionality
  if (header.dataset.sticky) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.classList.add('header--scrolled');
      } else {
        header.classList.remove('header--scrolled');
      }
    });
  }

  // Mobile menu
  const menuToggle = document.querySelector('.header__menu-toggle');
  const mobileMenu = document.querySelector('.header__mobile-menu');
  const overlay = document.querySelector('.header__overlay');
  const closeButton = document.querySelector('.header__close-menu');

  if (menuToggle && mobileMenu && overlay) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.add('header__mobile-menu--active');
      overlay.classList.add('header__overlay--active');
      document.body.style.overflow = 'hidden';
    });

    function closeMenu() {
      mobileMenu.classList.remove('header__mobile-menu--active');
      overlay.classList.remove('header__overlay--active');
      document.body.style.overflow = '';
    }

    overlay.addEventListener('click', closeMenu);
    if (closeButton) {
      closeButton.addEventListener('click', closeMenu);
    }

    // Mobile submenus
    const submenuToggles = document.querySelectorAll('.header__submenu-toggle');
    submenuToggles.forEach(toggle => {
      toggle.addEventListener('click', function(e) {
        e.preventDefault();
        const submenu = this.nextElementSibling;
        if (submenu) {
          submenu.classList.toggle('header__mobile-submenu--active');
          this.classList.toggle('header__submenu-toggle--active');
        }
      });
    });
  }
}

/**
 * Product gallery
 */
function initializeProductGallery() {
  const galleryMain = document.querySelector('.product-gallery__main');
  const galleryThumbs = document.querySelectorAll('.product-gallery__thumbnail');
  
  if (!galleryMain || !galleryThumbs.length) return;
  
  galleryThumbs.forEach(thumb => {
    thumb.addEventListener('click', function() {
      // Update selected thumbnail
      galleryThumbs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      
      // Update main image
      const newSrc = this.dataset.src;
      const newSrcset = this.dataset.srcset;
      const mainImg = galleryMain.querySelector('img');
      
      if (mainImg) {
        mainImg.src = newSrc;
        if (newSrcset) {
          mainImg.srcset = newSrcset;
        }
      }
    });
  });
}

/**
 * Quantity selector
 */
function initializeQuantitySelector() {
  const quantities = document.querySelectorAll('.quantity-selector');
  
  quantities.forEach(quantity => {
    const input = quantity.querySelector('.quantity-selector__input');
    const decrease = quantity.querySelector('.quantity-selector__decrease');
    const increase = quantity.querySelector('.quantity-selector__increase');
    
    if (!input || !decrease || !increase) return;
    
    decrease.addEventListener('click', () => {
      const value = parseInt(input.value);
      if (value > 1) {
        input.value = value - 1;
        input.dispatchEvent(new Event('change'));
      }
    });
    
    increase.addEventListener('click', () => {
      const value = parseInt(input.value);
      input.value = value + 1;
      input.dispatchEvent(new Event('change'));
    });
  });
}

/**
 * Product variants
 */
function initializeProductVariants() {
  const variantSelects = document.querySelectorAll('.product-variant-select');
  
  if (!variantSelects.length) return;
  
  variantSelects.forEach(select => {
    select.addEventListener('change', function() {
      const form = this.closest('form');
      if (!form) return;
      
      const variantId = this.value;
      const variantImage = this.options[this.selectedIndex].dataset.variantImage;
      const variantPrice = this.options[this.selectedIndex].dataset.variantPrice;
      const comparePrice = this.options[this.selectedIndex].dataset.variantComparePrice;
      
      // Update variant ID
      const hiddenInput = form.querySelector('input[name="id"]');
      if (hiddenInput) {
        hiddenInput.value = variantId;
      }
      
      // Update price
      const priceElement = document.querySelector('.product__price');
      const comparePriceElement = document.querySelector('.product__compare-price');
      
      if (priceElement && variantPrice) {
        priceElement.textContent = variantPrice;
      }
      
      if (comparePriceElement) {
        if (comparePrice) {
          comparePriceElement.textContent = comparePrice;
          comparePriceElement.style.display = 'inline-block';
        } else {
          comparePriceElement.style.display = 'none';
        }
      }
      
      // Update image if needed
      if (variantImage) {
        const thumbnails = document.querySelectorAll('.product-gallery__thumbnail');
        thumbnails.forEach(thumb => {
          if (thumb.dataset.variantId === variantId) {
            thumb.click();
          }
        });
      }
    });
  });
}

/**
 * Accordions
 */
function initializeAccordions() {
  const accordions = document.querySelectorAll('.accordion');
  
  accordions.forEach(accordion => {
    const headers = accordion.querySelectorAll('.accordion__header');
    
    headers.forEach(header => {
      header.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const isActive = this.classList.contains('accordion__header--active');
        
        // Close all accordions in this group
        if (accordion.dataset.singleOpen) {
          headers.forEach(h => {
            h.classList.remove('accordion__header--active');
            h.nextElementSibling.style.maxHeight = null;
          });
        }
        
        // Toggle current accordion
        if (!isActive) {
          this.classList.add('accordion__header--active');
          content.style.maxHeight = content.scrollHeight + 'px';
        } else if (!accordion.dataset.singleOpen) {
          this.classList.remove('accordion__header--active');
          content.style.maxHeight = null;
        }
      });
    });
    
    // Open default accordion if specified
    const defaultOpen = accordion.querySelector('.accordion__header[data-default-open]');
    if (defaultOpen) {
      defaultOpen.click();
    }
  });
}

/**
 * AJAX cart functionality
 */
function initializeAjaxCart() {
  const addToCartForms = document.querySelectorAll('form[action="/cart/add"]');
  const cartCount = document.querySelector('[data-cart-count]');
  
  addToCartForms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const submitButton = form.querySelector('[type="submit"]');
      const originalButtonText = submitButton.textContent;
      
      // Change button state
      submitButton.disabled = true;
      submitButton.textContent = 'Adding...';
      
      const formData = new FormData(form);
      
      fetch('/cart/add.js', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        // Update cart count
        fetch('/cart.js')
          .then(res => res.json())
          .then(cart => {
            if (cartCount) {
              cartCount.textContent = cart.item_count;
            }
            
            // Show success message
            showCartNotification('Product added to cart', 'success');
            
            // Reset button
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
          });
      })
      .catch(error => {
        console.error('Error:', error);
        showCartNotification('Could not add product to cart', 'error');
        
        // Reset button
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
      });
    });
  });
}

/**
 * Show cart notification
 */
function showCartNotification(message, type) {
  // Check if notification element exists
  let notification = document.querySelector('.cart-notification');
  
  // Create notification if it doesn't exist
  if (!notification) {
    notification = document.createElement('div');
    notification.className = 'cart-notification';
    document.body.appendChild(notification);
  }
  
  // Set type class
  notification.className = 'cart-notification';
  notification.classList.add(`cart-notification--${type}`);
  
  // Set message
  notification.textContent = message;
  
  // Show notification
  notification.classList.add('cart-notification--visible');
  
  // Hide after timeout
  setTimeout(() => {
    notification.classList.remove('cart-notification--visible');
  }, 3000);
}

/**
 * Newsletter form
 */
function initializeNewsletterForm() {
  const newsletterForms = document.querySelectorAll('form[action="/contact#contact_form"]');
  
  newsletterForms.forEach(form => {
    if (form.querySelector('input[name="contact[tags]"][value="newsletter"]')) {
      form.addEventListener('submit', function(e) {
        // Form validation is handled by the browser
        
        // Success messages are handled by Shopify's own system
        // We can add additional logic here if needed
      });
    }
  });
}