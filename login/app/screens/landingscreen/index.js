import { ThemeProvider } from 'context/ThemeContext';
import LandingscreenView from './LandingscreenView';

export default function LandingScreenWrapper(props) {  
    return (
    <ThemeProvider>
        <LandingscreenView {...props} />
    </ThemeProvider>
    )
}