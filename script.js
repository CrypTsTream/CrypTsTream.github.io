        // Global variables
let cart = [];
let currentService = {};
let currentLanguage = 'fr';
let customerInfo = {};

// Language translations
const translations = {
    fr: {
        // Hero section
        'Premium Services at Your Fingertips': 'Services Premium à Portée de Main',
        'Subscribe to the best streaming, crypto and gaming services': 'Abonnez-vous aux meilleurs services de streaming, crypto et gaming',
        
        // Services section
        'Our Services': 'Nos Services',
        'Music': 'Musique',
        'Video & Streaming': 'Vidéo & Streaming',
        'Crypto Services': 'Services Crypto',
        'Gaming': 'Gaming',
        
        // Service names
        'Buy/Sell USDT': 'Achat/Vente USDT',
        'Buy/Sell BTC': 'Achat/Vente BTC',
        'Buy/Sell ETH': 'Achat/Vente ETH',
        'Daily rate': 'Taux du jour',
        'Variable': 'Variable',
        
        // Buttons
        'Subscribe': 'S\'abonner',
        'Order': 'Commander',
        'Contact Us': 'Contactez-nous',
        'Cart': 'Panier',
        
        // Modal forms
        'Subscription Form': 'Formulaire d\'Abonnement',
        'Selected service:': 'Service sélectionné:',
        'Price:': 'Prix:',
        'Full name *:': 'Nom complet *:',
        'Phone *:': 'Téléphone *:',
        'Subscription duration:': 'Durée d\'abonnement:',
        'Message (optional):': 'Message (optionnel):',
        'Additional information...': 'Informations supplémentaires...',
        'Add to Cart': 'Ajouter au Panier',
        'Order Now': 'Commander Maintenant',
        'My Cart': 'Mon Panier',
        'Order All': 'Commander Tout',
        'Download PDF': 'Télécharger PDF',
        
        // Duration options
        '1 month': '1 mois',
        '3 months': '3 mois',
        '6 months': '6 mois',
        '12 months': '12 mois',
        
        // Statistics
        'Happy Customers': 'Clients satisfaits',
        'Orders Processed': 'Commandes traitées',
        'Active Purchases': 'Achats en cours',
        
        // Purchase indicators
        'people are buying now': 'personnes achètent maintenant',
        'transactions today': 'transactions aujourd\'hui',
        'players are buying now': 'joueurs achètent maintenant',
        
        // Cart and orders
        'Your cart is empty': 'Votre panier est vide',
        'Total:': 'Total:',
        
        // Order modal
        'Bulk Order': 'Commande Groupée',
        'Order Summary': 'Récapitulatif de la commande',
        'Generate PDF and Order': 'Générer PDF et Commander',
        
        // FAQ section
        'FAQ - Frequently Asked Questions': 'FAQ - Questions Fréquentes',
        'How can I subscribe?': 'Comment puis-je m\'abonner ?',
        'Which payment methods do you accept?': 'Quels moyens de paiement acceptez-vous ?',
        'When will I receive my subscription?': 'Quand vais-je recevoir mon abonnement ?',
        'Are subscriptions renewable?': 'Est-ce que les abonnements sont renouvelables ?',
        
        // Footer
        'Quick Links': 'Liens Rapides',
        'Follow Us': 'Suivez-nous',
        
        // Toast messages
        'Your cart is empty!': 'Votre panier est vide!',
        'Please fill all required fields.': 'Veuillez remplir tous les champs obligatoires.',
        
        // Customer information
        'Customer information:': 'Informations client:',
        'Name:': 'Nom:',
        'Email:': 'Email:',
        'Message:': 'Message:',
        'Order date:': 'Date de commande:',
        
        // Order summary
        'Order details:': 'Détails de la commande:',
        
        // WhatsApp messages
        'Hello, I would like to order the following services:': 'Bonjour, je souhaite commander les services suivants:',
        'I have attached a PDF with my order details.': 'J\'ai joint un PDF avec les détails de ma commande.',
        // Prix et services
        '/mois': '/mois',
        'XOF': 'XOF',
        'Taux du jour': 'Taux du jour',
        'Variable': 'Variable',
        
        // Noms de services
        'Spotify Premium': 'Spotify Premium',
        'Apple Music': 'Apple Music',
        'Deezer Premium': 'Deezer Premium',
        'Netflix Premium': 'Netflix Premium',
        'Disney+ Premium': 'Disney+ Premium',
        'Amazon Prime Vidéo': 'Amazon Prime Vidéo',
        'Call of Duty Mobile': 'Call of Duty Mobile',
        'Free Fire': 'Free Fire',
        'Nintendo Mobile': 'Nintendo Mobile'
    },
    en: {
        // Hero section
        'Services Premium à Portée de Main': 'Premium Services at Your Fingertips',
        'Abonnez-vous aux meilleurs services de streaming, crypto and gaming': 'Subscribe to the best streaming, crypto and gaming services',
        
        // Services section
        'Nos Services': 'Our Services',
        'Musique': 'Music',
        'Vidéo & Streaming': 'Video & Streaming',
        'Services Crypto': 'Crypto Services',
        'Gaming': 'Gaming',
        
        // Service names
        'Achat/Vente USDT': 'Buy/Sell USDT',
        'Achat/Vente BTC': 'Buy/Sell BTC',
        'Achat/Vente ETH': 'Buy/Sell ETH',
        'Taux du jour': 'Daily rate',
        'Variable': 'Variable',
        
        // Buttons
        'S\'abonner': 'Subscribe',
        'Commander': 'Order',
        'Contactez-nous': 'Contact Us',
        'Panier': 'Cart',
        
        // Modal forms
        'Formulaire d\'Abonnement': 'Subscription Form',
        'Service sélectionné:': 'Selected service:',
        'Prix:': 'Price:',
        'Nom complet *:': 'Full name *:',
        'Téléphone *:': 'Phone *:',
        'Durée d\'abonnement:': 'Subscription duration:',
        'Message (optionnel):': 'Message (optional):',
        'Informations supplémentaires...': 'Additional information...',
        'Ajouter au Panier': 'Add to Cart',
        'Commander Maintenant': 'Order Now',
        'Mon Panier': 'My Cart',
        'Commander Tout': 'Order All',
        'Télécharger PDF': 'Download PDF',
        
        // Duration options
        '1 mois': '1 month',
        '3 mois': '3 months',
        '6 mois': '6 months',
        '12 mois': '12 months',
        
        // Statistics
        'Clients satisfaits': 'Happy Customers',
        'Commandes traitées': 'Orders Processed',
        'Achats en cours': 'Active Purchases',
        
        // Purchase indicators
        'personnes achètent maintenant': 'people are buying now',
        'transactions aujourd\'hui': 'transactions today',
        'joueurs achètent maintenant': 'players are buying now',
        
        // Cart and orders
        'Votre panier est vide': 'Your cart is empty',
        'Total:': 'Total:',
        
        // Order modal
        'Commande Groupée': 'Bulk Order',
        'Récapitulatif de la commande': 'Order Summary',
        'Générer PDF et Commander': 'Generate PDF and Order',
        
        // FAQ section
        'FAQ - Questions Fréquentes': 'FAQ - Frequently Asked Questions',
        'Comment puis-je m\'abonner ?': 'How can I subscribe?',
        'Quels moyens de paiement acceptez-vous ?': 'Which payment methods do you accept?',
        'Quand vais-je recevoir mon abonnement ?': 'When will I receive my subscription?',
        'Est-ce que les abonnements sont renouvelables ?': 'Are subscriptions renewable?',
        
        // Footer
        'Liens Rapides': 'Quick Links',
        'Suivez-nous': 'Follow Us',
        
        // Toast messages
        'Votre panier est vide!': 'Your cart is empty!',
        'Veuillez remplir tous les champs obligatoires.': 'Please fill all required fields.',
        
        // Customer information
        'Informations client:': 'Customer information:',
        'Nom:': 'Name:',
        'Email:': 'Email:',
        'Message:': 'Message:',
        'Date de commande:': 'Order date:',
        
        // Order summary
        'Détails de la commande:': 'Order details:',
        
        // WhatsApp messages
        'Bonjour, je souhaite commander les services suivants:': 'Hello, I would like to order the following services:',
        'J\'ai joint un PDF avec les détails de ma commande.': 'I have attached a PDF with my order details.',
        // Prix et services
        '/mois': '/month',
        'XOF': 'XOF',
        'Taux du jour': 'Daily rate',
        'Variable': 'Variable',
        
        // Noms de services
        'Spotify Premium': 'Spotify Premium',
        'Apple Music': 'Apple Music',
        'Deezer Premium': 'Deezer Premium',
        'Netflix Premium': 'Netflix Premium',
        'Disney+ Premium': 'Disney+ Premium',
        'Amazon Prime Vidéo': 'Amazon Prime Video',
        'Call of Duty Mobile': 'Call of Duty Mobile',
        'Free Fire': 'Free Fire',
        'Nintendo Mobile': 'Nintendo Mobile'
    }
};

        // Fonction toggleLanguage mise à jour
function toggleLanguage() {
    currentLanguage = currentLanguage === 'fr' ? 'en' : 'fr';
    document.getElementById('langText').textContent = currentLanguage.toUpperCase();
    document.getElementById('htmlLang').setAttribute('lang', currentLanguage);
    
    // Mettre à jour tous les éléments traduisibles
    document.querySelectorAll('[data-fr]').forEach(element => {
        const frText = element.getAttribute('data-fr');
        const enText = element.getAttribute('data-en');
        
        if (currentLanguage === 'fr' && frText) {
            element.textContent = frText;
        } else if (currentLanguage === 'en' && enText) {
            element.textContent = enText;
        }
    });
    
    // Mettre à jour les traductions spéciales
    updateSpecialTranslations();
    
    // Mettre à jour les prix
    updatePricesLanguage();
    
    // Mettre à jour les éléments du panier avec la nouvelle langue
    updateCartItemsLanguage();
    
    // Mettre à jour les badges populaires
    updatePopularBadgesLanguage();
}

// Nouvelle fonction pour mettre à jour la langue des éléments du panier
function updateCartItemsLanguage() {
    cart.forEach(item => {
        // Mettre à jour le nom du service
        if (item.service.originalName) {
            item.service.name = translateText(item.service.originalName);
        }
        
        // Mettre à jour le prix
        if (item.service.originalPrice) {
            item.service.price = translatePrice(item.service.originalPrice);
        }
        
        // Mettre à jour la durée
        item.duration = translateDuration(item.duration);
    });
    
    // Rafraîchir l'affichage du panier
    updateCartDisplay();
}

// Nouvelle fonction pour gérer les traductions spéciales
function updateSpecialTranslations() {
    // Traduction des placeholders
    const messageTextarea = document.getElementById('message');
    if (messageTextarea) {
        const placeholder = currentLanguage === 'fr' 
            ? 'Informations supplémentaires...' 
            : 'Additional information...';
        messageTextarea.setAttribute('placeholder', placeholder);
    }
    
    const orderMessageTextarea = document.getElementById('orderMessage');
    if (orderMessageTextarea) {
        const placeholder = currentLanguage === 'fr' 
            ? 'Informations supplémentaires...' 
            : 'Additional information...';
        orderMessageTextarea.setAttribute('placeholder', placeholder);
    }
    
    // Traduction du titre de la page
    const title = currentLanguage === 'fr' 
        ? 'CrypTsTream - Services d\'Abonnement Premium'
        : 'CrypTsTream - Premium Subscription Services';
    document.title = title;
}
        // Modal functions
        function openSubscription(serviceName, servicePrice, serviceCategory) {
            currentService = {
                name: serviceName,
                price: servicePrice,
                category: serviceCategory
            };
            
            document.getElementById('serviceName').value = serviceName;
            document.getElementById('servicePrice').value = servicePrice;
            
            document.getElementById('subscriptionModal').style.display = 'block';
        }

        function closeModal(modalId) {
            document.getElementById(modalId).style.display = 'none';
        }

        function openCart() {
            document.getElementById('cartModal').style.display = 'block';
            updateCartDisplay();
        }

        // Cart functionality
        function quickAddToCart(serviceName, servicePrice) {
    currentService = {
        name: serviceName,
        price: servicePrice,
        category: 'Quick Add'
    };
    
    // Traduire le nom du service et le prix selon la langue actuelle
    const translatedName = translateText(serviceName);
    const translatedPrice = translatePrice(servicePrice);
    
    // Add to cart avec les versions traduites
    cart.push({
        service: {
            ...currentService,
            name: translatedName,
            price: translatedPrice,
            originalName: serviceName, // Conserver le nom original
            originalPrice: servicePrice // Conserver le prix original
        },
        duration: translateDuration('1 mois'),
        customer: {}
    });
    
    updateCartCount();
    showToast(`${translatedName} a été ajouté au panier!`, 'success');
}

        function addToCart() {
    const form = document.getElementById('subscriptionForm');
    const formData = new FormData(form);
    
    // Store customer info for later use
    customerInfo = {
        fullName: formData.get('fullName'),
        email: formData.get('email'),
        phone: formData.get('phone')
    };
    
    // Traduire le nom du service et le prix selon la langue actuelle
    const translatedName = translateText(currentService.name);
    const translatedPrice = translatePrice(currentService.price);
    
    // Add to cart avec les versions traduites
    cart.push({
        service: {
            ...currentService,
            name: translatedName,
            price: translatedPrice,
            originalName: currentService.name, // Conserver le nom original pour les mises à jour
            originalPrice: currentService.price // Conserver le prix original pour les mises à jour
        },
        duration: translateDuration(formData.get('duration')),
        message: formData.get('message'),
        customer: customerInfo
    });
    
    updateCartCount();
    closeModal('subscriptionModal');
    showToast(`${translatedName} a été ajouté au panier!`, 'success');
}

        function updateCartCount() {
            document.getElementById('cartCount').textContent = cart.length;
        }

        function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p data-fr="Votre panier est vide" data-en="Your cart is empty">Votre panier est vide</p>';
        cartTotal.textContent = currentLanguage === 'fr' ? 'Total: 0XOF' : 'Total: 0XOF';
        return;
    }
    
    let total = 0;
    cartItems.innerHTML = '';
    
    cart.forEach((item, index) => {
        // Extraire la valeur numérique du prix
        const priceValue = parseFloat(item.service.price.replace(/[^0-9.]/g, '')) || 0;
        total += priceValue;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div>
                <h4>${item.service.name}</h4>
                <p>${item.service.price} - ${item.duration}</p>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${index})">
                <i class="fas fa-trash"></i>
            </button>
        `;
        
        cartItems.appendChild(cartItem);
    });
    
    cartTotal.textContent = currentLanguage === 'fr' ? `Total: ${total.toFixed(2)}XOF` : `Total: ${total.toFixed(2)}XOF`;
}

        function removeFromCart(index) {
            cart.splice(index, 1);
            updateCartCount();
            updateCartDisplay();
        }

        // Order functionality
        function orderAll() {
            if (cart.length === 0) {
                showToast(currentLanguage === 'fr' ? 'Votre panier est vide!' : 'Your cart is empty!', 'warning');
                return;
            }
            
            generatePDFAndWhatsApp();
        }

        function orderAll() {
    if (cart.length === 0) {
        showToast(currentLanguage === 'fr' ? 'Votre panier est vide!' : 'Your cart is empty!', 'warning');
        return;
    }
    
    // Afficher le modal de commande groupée
    document.getElementById('orderAllModal').style.display = 'block';
    updateOrderSummary();
}

function updateOrderSummary() {
    const orderItemsList = document.getElementById('orderItemsList');
    const orderTotal = document.getElementById('orderTotal');
    
    let total = 0;
    orderItemsList.innerHTML = '';
    
    cart.forEach((item, index) => {
        const price = parseFloat(item.service.price.replace('XOF', '').replace('/mois', '')) || 0;
        total += price;
        
        const orderItem = document.createElement('div');
        orderItem.className = 'order-item';
        orderItem.innerHTML = `
            <div class="order-item-name">${item.service.name}</div>
            <div class="order-item-price">${item.service.price}</div>
        `;
        
        orderItemsList.appendChild(orderItem);
    });
    
    orderTotal.textContent = currentLanguage === 'fr' ? `Total: ${total.toFixed(2)}XOF` : `Total: ${total.toFixed(2)}XOF`;
}

function generateBulkOrderPDF() {
    const form = document.getElementById('orderAllForm');
    const formData = new FormData(form);
    
    // Valider le formulaire
    if (!formData.get('orderFullName') || !formData.get('orderPhone')) {
        showToast(currentLanguage === 'fr' ? 'Veuillez remplir tous les champs obligatoires.' : 'Please fill all required fields.', 'error');
        return;
    }
    
    // Récupérer les informations client
    const customerInfo = {
        fullName: formData.get('orderFullName'),
        email: formData.get('orderEmail'),
        phone: formData.get('orderPhone'),
        message: formData.get('orderMessage')
    };
    
    // Créer le contenu du PDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Ajouter le logo et l'en-tête
    doc.setFillColor(40, 40, 80);
    doc.rect(0, 0, 210, 40, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(22);
    doc.text('CrypTsTream', 105, 20, { align: 'center' });
    doc.setFontSize(16);
    doc.text(currentLanguage === 'fr' ? 'Récapitulatif de commande' : 'Order Summary', 105, 30, { align: 'center' });
    
    // Informations client
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    let yPosition = 60;
    
    doc.setFont(undefined, 'bold');
    doc.text(currentLanguage === 'fr' ? 'Informations client:' : 'Customer information:', 20, yPosition);
    doc.setFont(undefined, 'normal');
    yPosition += 10;
    doc.text(`${currentLanguage === 'fr' ? 'Nom:' : 'Name:'} ${customerInfo.fullName}`, 20, yPosition);
    yPosition += 7;
    doc.text(`${currentLanguage === 'fr' ? 'Téléphone:' : 'Phone:'} ${customerInfo.phone}`, 20, yPosition);
    
    if (customerInfo.email) {
        yPosition += 7;
        doc.text(`Email: ${customerInfo.email}`, 20, yPosition);
    }
    
    yPosition += 15;
    
    // Détails de la commande
    doc.setFont(undefined, 'bold');
    doc.text(currentLanguage === 'fr' ? 'Détails de la commande:' : 'Order details:', 20, yPosition);
    yPosition += 10;
    
    let total = 0;
    cart.forEach(item => {
        const price = parseFloat(item.service.price.replace('XOF', '').replace('/mois', '')) || 0;
        total += price;
        
        if (yPosition > 250) {
            doc.addPage();
            yPosition = 20;
        }
        
        doc.setFont(undefined, 'normal');
        doc.text(`${item.service.name} - ${item.service.price}`, 20, yPosition);
        yPosition += 7;
    });
    
    // Total
    yPosition += 10;
    doc.setFont(undefined, 'bold');
    doc.text(`${currentLanguage === 'fr' ? 'Total:' : 'Total:'} ${total.toFixed(2)}XOF`, 20, yPosition);
    
    // Date
    yPosition += 15;
    doc.setFont(undefined, 'italic');
    const now = new Date();
    const dateStr = now.toLocaleDateString(currentLanguage === 'fr' ? 'fr-FR' : 'en-US');
    doc.text(`${currentLanguage === 'fr' ? 'Date de commande:' : 'Order date:'} ${dateStr}`, 20, yPosition);
    
    // Message personnalisé
    if (customerInfo.message) {
        yPosition += 15;
        if (yPosition > 250) {
            doc.addPage();
            yPosition = 20;
        }
        doc.setFont(undefined, 'normal');
        doc.text(`${currentLanguage === 'fr' ? 'Message:' : 'Message:'}`, 20, yPosition);
        yPosition += 7;
        
        // Gérer le texte long avec découpage
        const splitMessage = doc.splitTextToSize(customerInfo.message, 170);
        doc.text(splitMessage, 20, yPosition);
    }
    
    // Pied de page
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFontSize(10);
        doc.setTextColor(100, 100, 100);
        doc.text(`CrypTsTream - Page ${i}/${pageCount}`, 105, 287, { align: 'center' });
    }
    
    // Sauvegarder le PDF
    const fileName = `CrypTsTream_Commande_${now.getTime()}.pdf`;
    doc.save(fileName);
    
    // Préparer le message WhatsApp
    let whatsappMessage = currentLanguage === 'fr' 
        ? `Bonjour, je souhaite commander les services suivants:\n\n`
        : `Hello, I would like to order the following services:\n\n`;
    
    cart.forEach(item => {
        whatsappMessage += `- ${item.service.name}: ${item.service.price}\n`;
    });
    
    whatsappMessage += `\n${currentLanguage === 'fr' ? 'Total' : 'Total'}: ${total.toFixed(2)}XOF\n\n`;
    whatsappMessage += `${currentLanguage === 'fr' ? 'Informations client:' : 'Customer information:'}\n`;
    whatsappMessage += `${currentLanguage === 'fr' ? 'Nom' : 'Name'}: ${customerInfo.fullName}\n`;
    whatsappMessage += `${currentLanguage === 'fr' ? 'Téléphone' : 'Phone'}: ${customerInfo.phone}\n`;
    
    if (customerInfo.email) {
        whatsappMessage += `Email: ${customerInfo.email}\n`;
    }
    
    if (customerInfo.message) {
        whatsappMessage += `\n${currentLanguage === 'fr' ? 'Message' : 'Message'}: ${customerInfo.message}\n`;
    }
    
    whatsappMessage += `\n${currentLanguage === 'fr' ? 'J\'ai joint un PDF avec les détails de ma commande.' : 'I have attached a PDF with my order details.'}`;
    
    // Ouvrir WhatsApp
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/2290146621952?text=${encodedMessage}`, '_blank');
    
    // Fermer les modals
    closeModal('orderAllModal');
    closeModal('cartModal');
    
    // Vider le panier
    cart = [];
    updateCartCount();
}

        function generatePDFAndWhatsApp() {
            // Generate order summary
            let orderSummary = currentLanguage === 'fr' ? 'Récapitulatif de commande:\n\n' : 'Order summary:\n\n';
            let total = 0;
            
            cart.forEach(item => {
                const price = parseFloat(item.service.price) || 0;
                total += price;
                
                orderSummary += `- ${item.service.name}: ${item.service.price} (${item.duration})\n`;
            });
            
            orderSummary += `\n${currentLanguage === 'fr' ? 'Total' : 'Total'}: ${total.toFixed(2)}XOF\n`;
            
            if (customerInfo.fullName) {
                orderSummary += `\n${currentLanguage === 'fr' ? 'Informations client:' : 'Customer information:'}\n`;
                orderSummary += `${currentLanguage === 'fr' ? 'Nom' : 'Name'}: ${customerInfo.fullName}\n`;
                orderSummary += `${currentLanguage === 'fr' ? 'Téléphone' : 'Phone'}: ${customerInfo.phone}\n`;
                if (customerInfo.email) {
                    orderSummary += `Email: ${customerInfo.email}\n`;
                }
            }
            
            // Encode for WhatsApp URL
            const encodedMessage = encodeURIComponent(orderSummary);
            
            // Open WhatsApp with the order summary
            window.open(`https://wa.me/2290146621952?text=${encodedMessage}`, '_blank');
            
            // Close cart modal
            closeModal('cartModal');
        }

        // Form submission
        document.getElementById('subscriptionForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const serviceName = formData.get('serviceName');
            const servicePrice = formData.get('servicePrice');
            const fullName = formData.get('fullName');
            const phone = formData.get('phone');
            const duration = formData.get('duration');
            const message = formData.get('message');
            
            // Generate WhatsApp message
            let whatsappMessage = `Bonjour, je souhaite commander:\n\n`;
            whatsappMessage += `Service: ${serviceName}\n`;
            whatsappMessage += `Prix: ${servicePrice}\n`;
            whatsappMessage += `Durée: ${duration}\n`;
            whatsappMessage += `Nom: ${fullName}\n`;
            whatsappMessage += `Téléphone: ${phone}\n`;
            
            if (message) {
                whatsappMessage += `Message: ${message}\n`;
            }
            
            // Encode for WhatsApp URL
            const encodedMessage = encodeURIComponent(whatsappMessage);
            
            // Open WhatsApp
            window.open(`https://wa.me/2290146621952?text=${encodedMessage}`, '_blank');
            
            // Close modal
            closeModal('subscriptionModal');
        });

        // Close modals when clicking outside
        window.onclick = function(event) {
            if (event.target.classList.contains('modal')) {
                event.target.style.display = 'none';
            }
        }

        // Initialize page
        document.addEventListener('DOMContentLoaded', function() {
            updateCartCount();
        });
        // Ajouter ces fonctions à votre script.js existant

// Variables pour le thème
let currentTheme = 'light';

// Fonction pour basculer le thème
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('themeIcon');
    
    // Ajouter une classe pour l'animation de rotation
    themeIcon.classList.add('theme-rotating');
    
    if (currentTheme === 'light') {
        body.setAttribute('data-theme', 'dark');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        currentTheme = 'dark';
        
        // Sauvegarder la préférence
        localStorage.setItem('preferred-theme', 'dark');
    } else {
        body.removeAttribute('data-theme');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        currentTheme = 'light';
        
        // Sauvegarder la préférence
        localStorage.setItem('preferred-theme', 'light');
    }
    
    // Retirer la classe d'animation après 500ms
    setTimeout(() => {
        themeIcon.classList.remove('theme-rotating');
    }, 500);
}

// Fonction pour charger le thème sauvegardé
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('preferred-theme');
    const body = document.body;
    const themeIcon = document.getElementById('themeIcon');
    
    // Détecter la préférence système si aucune préférence sauvegardée
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        body.setAttribute('data-theme', 'dark');
        if (themeIcon) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
        currentTheme = 'dark';
    } else {
        body.removeAttribute('data-theme');
        if (themeIcon) {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
        currentTheme = 'light';
    }
}

// Écouter les changements de préférence système
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    // Ne changer automatiquement que si l'utilisateur n'a pas de préférence sauvegardée
    if (!localStorage.getItem('preferred-theme')) {
        if (e.matches) {
            // Système passe en dark mode
            document.body.setAttribute('data-theme', 'dark');
            const themeIcon = document.getElementById('themeIcon');
            if (themeIcon) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            }
            currentTheme = 'dark';
        } else {
            // Système passe en light mode
            document.body.removeAttribute('data-theme');
            const themeIcon = document.getElementById('themeIcon');
            if (themeIcon) {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
            currentTheme = 'light';
        }
    }
});

// Modifier la fonction existante d'initialisation
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    loadSavedTheme(); // Charger le thème sauvegardé au démarrage
});

// Purchase indicators functionality
function initializePurchaseIndicators() {
    // Initialize statistics with random values
    document.getElementById('totalCustomers').textContent = Math.floor(Math.random() * 2000) + 4000 + '+';
    document.getElementById('totalOrders').textContent = Math.floor(Math.random() * 5000) + 8000 + '+';
    updateActivePurchases();
    
    // Initialize purchase indicators for each service
    document.querySelectorAll('.purchase-indicator').forEach(indicator => {
        const min = parseInt(indicator.querySelector('.purchase-count').getAttribute('data-min'));
        const max = parseInt(indicator.querySelector('.purchase-count').getAttribute('data-max'));
        const randomCount = Math.floor(Math.random() * (max - min + 1)) + min;
        indicator.querySelector('.purchase-count').textContent = randomCount;
    });
    
    // Update counts periodically
    setInterval(updatePurchaseCounts, 15000);
    setInterval(updateActivePurchases, 10000);
}

function updatePurchaseCounts() {
    document.querySelectorAll('.purchase-indicator').forEach(indicator => {
        const countElement = indicator.querySelector('.purchase-count');
        const currentCount = parseInt(countElement.textContent);
        const min = parseInt(countElement.getAttribute('data-min'));
        const max = parseInt(countElement.getAttribute('data-max'));
        
        // Slightly adjust the count (up or down)
        const change = Math.random() > 0.5 ? 1 : -1;
        let newCount = currentCount + change;
        
        // Keep within bounds
        if (newCount < min) newCount = min;
        if (newCount > max) newCount = max;
        
        countElement.textContent = newCount;
        
        // Add animation for change
        countElement.classList.add('count-update');
        setTimeout(() => {
            countElement.classList.remove('count-update');
        }, 500);
    });
}

function updateActivePurchases() {
    const activeElement = document.getElementById('activeNow');
    const currentCount = parseInt(activeElement.textContent);
    const change = Math.random() > 0.4 ? 1 : -1;
    let newCount = currentCount + change;
    
    // Keep within reasonable bounds
    if (newCount < 15) newCount = 15;
    if (newCount > 40) newCount = 40;
    
    activeElement.textContent = newCount + '+';
    
    // Add animation
    activeElement.classList.add('count-update');
    setTimeout(() => {
        activeElement.classList.remove('count-update');
    }, 500);
}

function addPopularBadges() {
    const services = document.querySelectorAll('.service-item');
    const popularServices = [];
    
    // Select 2-3 random services to mark as popular
    const numPopular = Math.floor(Math.random() * 2) + 2;
    for (let i = 0; i < numPopular; i++) {
        const randomIndex = Math.floor(Math.random() * services.length);
        if (!popularServices.includes(randomIndex)) {
            popularServices.push(randomIndex);
        }
    }
    
    popularServices.forEach(index => {
        // Remove existing badge if any
        const existingBadge = services[index].querySelector('.popular-badge');
        if (existingBadge) {
            existingBadge.remove();
        }
        
        const badge = document.createElement('div');
        badge.className = 'popular-badge';
        badge.setAttribute('data-fr', 'Populaire');
        badge.setAttribute('data-en', 'Popular');
        badge.textContent = currentLanguage === 'fr' ? 'Populaire' : 'Popular';
        services[index].style.position = 'relative';
        services[index].appendChild(badge);
    });
}

// Mettre à jour les badges populaires lors du changement de langue
function updatePopularBadgesLanguage() {
    document.querySelectorAll('.popular-badge').forEach(badge => {
        if (currentLanguage === 'fr') {
            badge.textContent = badge.getAttribute('data-fr');
        } else {
            badge.textContent = badge.getAttribute('data-en');
        }
    });
}

// Update the DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    initializePurchaseIndicators();
    addPopularBadges();
    
    // Ajouter le bouton de chat flottant
    const floatingChat = document.createElement('a');
    floatingChat.href = 'https://wa.me/2290146621952';
    floatingChat.target = '_blank';
    floatingChat.className = 'floating-chat';
    floatingChat.innerHTML = '<i class="fab fa-whatsapp"></i>';
    document.body.appendChild(floatingChat);
    
    // Mettre à jour les prix selon la langue
    updatePricesLanguage();
});

// Fonction pour mettre à jour les prix selon la langue
function updatePricesLanguage() {
    document.querySelectorAll('.service-price[data-fr][data-en]').forEach(element => {
        if (currentLanguage === 'fr') {
            element.textContent = element.getAttribute('data-fr');
        } else {
            element.textContent = element.getAttribute('data-en');
        }
    });
}
// Effet de lumière qui suit la souris
document.querySelector('.hero').addEventListener('mousemove', function(e) {
    this.style.setProperty('--mouse-x', e.clientX + 'px');
    this.style.setProperty('--mouse-y', e.clientY + 'px');
});

// Ajouter des éléments scintillants
function addTwinkles() {
    const hero = document.querySelector('.hero');
    for (let i = 0; i < 5; i++) {
        const twinkle = document.createElement('div');
        twinkle.className = 'twinkle';
        twinkle.style.left = Math.random() * 100 + '%';
        twinkle.style.top = Math.random() * 100 + '%';
        twinkle.style.animationDelay = Math.random() * 4 + 's';
        hero.appendChild(twinkle);
    }
}

// Appeler après le chargement du DOM
document.addEventListener('DOMContentLoaded', addTwinkles);
// Fonction pour afficher les notifications toast
function showToast(message, type = 'success') {
    // Créer l'élément toast s'il n'existe pas
    let toast = document.getElementById('toast-notification');
    
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast-notification';
        toast.className = 'toast-notification';
        document.body.appendChild(toast);
    }
    
    // Définir le contenu et le type
    toast.textContent = message;
    toast.className = `toast-notification ${type}`;
    
    // Ajouter une icône selon le type
    let icon = '';
    switch(type) {
        case 'success':
            icon = '<i class="fas fa-check-circle"></i>';
            break;
        case 'error':
            icon = '<i class="fas fa-exclamation-circle"></i>';
            break;
        case 'warning':
            icon = '<i class="fas fa-exclamation-triangle"></i>';
            break;
        case 'info':
            icon = '<i class="fas fa-info-circle"></i>';
            break;
    }
    
    toast.innerHTML = icon + ' ' + message;
    
    // Afficher le toast
    toast.classList.add('show');
    
    // Cacher automatiquement après 3 secondes
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}
// Fonctionnalité de glisser-déposer pour le panier
document.addEventListener('DOMContentLoaded', function() {
    const cartContainer = document.querySelector('.cart-popup-container');
    const cartBtn = document.querySelector('.cart-btn');
    let isDragging = false;
    let offsetX, offsetY;

    // Fonction pour commencer le déplacement
    function startDrag(e) {
        isDragging = true;
        
        // Gérer à la fois les événements tactiles et souris
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        
        const rect = cartContainer.getBoundingClientRect();
        offsetX = clientX - rect.left;
        offsetY = clientY - rect.top;
        
        // Empêcher la sélection de texte et le comportement par défaut
        e.preventDefault();
        
        // Ajouter les écouteurs d'événements pour le déplacement et la fin
        document.addEventListener('mousemove', onDrag);
        document.addEventListener('touchmove', onDrag);
        document.addEventListener('mouseup', stopDrag);
        document.addEventListener('touchend', stopDrag);
        
        // Changer le curseur pour indiquer le déplacement
        cartBtn.style.cursor = 'grabbing';
    }

    // Fonction pendant le déplacement
    function onDrag(e) {
        if (!isDragging) return;
        
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        
        // Calculer la nouvelle position
        let newX = clientX - offsetX;
        let newY = clientY - offsetY;
        
        // Limiter la position aux bords de la fenêtre
        const containerWidth = cartContainer.offsetWidth;
        const containerHeight = cartContainer.offsetHeight;
        
        newX = Math.max(10, Math.min(window.innerWidth - containerWidth - 10, newX));
        newY = Math.max(10, Math.min(window.innerHeight - containerHeight - 10, newY));
        
        // Appliquer la nouvelle position
        cartContainer.style.position = 'fixed';
        cartContainer.style.left = newX + 'px';
        cartContainer.style.bottom = 'auto';
        cartContainer.style.right = 'auto';
        cartContainer.style.top = newY + 'px';
    }

    // Fonction pour arrêter le déplacement
    function stopDrag() {
        isDragging = false;
        cartBtn.style.cursor = 'grab';
        
        // Supprimer les écouteurs d'événements
        document.removeEventListener('mousemove', onDrag);
        document.removeEventListener('touchmove', onDrag);
        document.removeEventListener('mouseup', stopDrag);
        document.removeEventListener('touchend', stopDrag);
    }

    // Ajouter les écouteurs d'événements pour le début du déplacement
    cartBtn.addEventListener('mousedown', startDrag);
    cartBtn.addEventListener('touchstart', startDrag);
    
    // Empêcher l'ouverture du panier lors du glissement
    cartBtn.addEventListener('click', function(e) {
        if (isDragging) {
            e.preventDefault();
            e.stopPropagation();
        }
    });
    
    // Style initial pour le bouton panier
    cartBtn.style.cursor = 'grab';
});
// Fonction pour traduire un texte
function translateText(text) {
    if (translations[currentLanguage] && translations[currentLanguage][text]) {
        return translations[currentLanguage][text];
    }
    return text;
}

// Fonction pour traduire un prix
function translatePrice(price) {
    if (currentLanguage === 'en') {
        return price.replace('/mois', '/month');
    }
    return price;
}

// Fonction pour traduire une durée
function translateDuration(duration) {
    if (currentLanguage === 'en') {
        const durationMap = {
            '1 mois': '1 month',
            '3 mois': '3 months',
            '6 mois': '6 months',
            '12 mois': '12 months'
        };
        return durationMap[duration] || duration;
    }
    return duration;
}
// Mettre à jour les traductions spéciales
    updateSpecialTranslations();
    
    // Mettre à jour la meta description
    updateMetaDescription();
    
    // Mettre à jour les prix
    updatePricesLanguage();