import { ThemeProvider } from 'context/ThemeContext';
import DashboardView from './DashboardView';

export default function DashboardScreenWrapper(props) {  
    return (
    <ThemeProvider>
        <DashboardView {...props} />
    </ThemeProvider>
    )
}