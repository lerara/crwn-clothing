import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const SignIn = ( ) => {
    const logGoogleUser = async() => {
        const {user} = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
    }

    return (
        <div>
        <div>Sign in page</div>
        <button onClick={logGoogleUser}>sign In With Google Popup</button>
        </div>
        
    )
}

export default SignIn;