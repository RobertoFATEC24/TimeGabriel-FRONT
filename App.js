const { createApp, ref } = Vue;

createApp({
    setup() {
        // Menu items
        const menuItems = ref(['Produtos', 'Estoque', 'Checkout', 'Entregas', 'Notificações']);
        const activeMenuItem = ref('Produtos');

        // Product form data
        const product = ref({
            name: 'Lorem',
            category: 'Lorem',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nPuisce egestore tellus elementum\nmusculis consequat, sollicitudin imperdiet enim dignissimo.\nDolcique ac infus ex amort ora aliquam ventibulum',
            initialQuantity: 5,
            initialQuantityDecimal: 0.00,
            price: 0.00,
            minQuantity: 1,
            expiryDate: '2027-04-02',
            barcode: '14634364587',
            supplier: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        });

        // Invoice link
        const invoiceLink = ref('Lorem ipsum dolor sit amet, consectetur adipiscing elit');

        // Feedback message
        const feedbackMessage = ref('');
        const showFeedback = ref(false);

        // Methods
        const registerProduct = () => {
            showFeedbackMessage('Produto registrado com sucesso!');
            console.log('Produto registrado:', product.value);
        };

        const registerFromInvoice = () => {
            showFeedbackMessage('Produtos registrados a partir da nota fiscal!');
            console.log('Link da nota fiscal:', invoiceLink.value);
        };

        const resetForm = () => {
            if (confirm('Deseja cancelar o registro?')) {
                product.value = {
                    name: 'Lorem',
                    category: 'Lorem',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nPuisce egestore tellus elementum\nmusculis consequat, sollicitudin imperdiet enim dignissimo.\nDolcique ac infus ex amort ora aliquam ventibulum',
                    initialQuantity: 0,
                    initialQuantityDecimal: 0.00,
                    price: 0.00,
                    minQuantity: 1,
                    expiryDate: '',
                    barcode: '',
                    supplier: ''
                };
                showFeedbackMessage('Formulário limpo com sucesso');
            }
        };

        const showFeedbackMessage = (message) => {
            feedbackMessage.value = message;
            showFeedback.value = true;
            setTimeout(() => {
                showFeedback.value = false;
            }, 3000);
        };

        return {
            menuItems,
            activeMenuItem,
            product,
            invoiceLink,
            registerProduct,
            registerFromInvoice,
            resetForm,
            feedbackMessage,
            showFeedback
        };
    }
}).mount('#app');
