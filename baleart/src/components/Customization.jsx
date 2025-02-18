import Language from './Language';
import Theme from './Theme';
export default function Customization() {
    return (
        <div className="flex flex-row justify-between items-center md:space-y-0 md:space-x-4 mt-1">
            <Language />
            <Theme />
        </div>
    )
}