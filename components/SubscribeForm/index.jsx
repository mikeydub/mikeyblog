import ConvertKitForm from "convertkit-react";
const FORM_ID = 1875705;

const config = {
    formId: FORM_ID,
    template: 'clare',
    hideName: true,
    showLabels: false,
    namePlaceholder: 'e.g. Zac Efron',
    emailPlaceholder: 'e.g. zac@efron.com',
    submitText: 'Sign up',
}

const SubscribeForm = () => (
    <div className='m-6'>
        <ConvertKitForm {...config} />
    </div>
)

export default SubscribeForm;