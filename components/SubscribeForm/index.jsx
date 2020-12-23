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

const SubscribeForm = ({ text }) => (
    <div className='mx-6 my-4'>
        {text && <p className='italic mb-1'>{ text }</p>}
        <ConvertKitForm {...config} />
    </div>
)

export default SubscribeForm;