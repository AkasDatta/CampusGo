import googleImage from '../../../../assets/logo/google.png';
import gitHubImage from '../../../../assets/logo/gitHub.png';
import { AuthContext } from '../../../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';

const SocialLogin = () => {
    const { signInWithGoogle, signInWithGithub  } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
  
    const from = location.state?.from?.pathname || "/";
    const handleGoogleSignIn = () => {
        signInWithGoogle()
          .then(result => {
            const loggedUser = result.user;
            navigate(from, { replace: true });
            console.log(loggedUser);
          })
          .catch(error => {
            console.log(error);
          });
      };
    
      const handleGitHubSignIn = () => {
        signInWithGithub()
          .then(result => {
            const user = result.user;
            navigate(from, { replace: true });
            console.log(user);
          })
          .catch(error => {
            console.log(error);
          });
      };
    return (
        <div>
            <a onClick={handleGoogleSignIn} href="#" className="google-link">
                <img src={googleImage} alt="Google" />Continue with Google
            </a>
            <a onClick={handleGitHubSignIn} href="#" className="google-link">
                <img src={gitHubImage} alt="GitHub" />Continue with GitHub
            </a>
        </div>
    );
};

export default SocialLogin;