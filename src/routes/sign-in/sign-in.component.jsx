import { 
    signInWithGooglePopup, 
    createUserDocumentFromAuth 
} from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component'

const SignIn = ( ) => {
    
    const logGoogleUser = async() => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
        <div>Sign in page</div>
        <button onClick={logGoogleUser}>sign In With Google Popup</button>
        <SignUpForm />
        </div>
        
    )
}

export default SignIn;