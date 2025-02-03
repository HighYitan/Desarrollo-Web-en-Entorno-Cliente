export default function Language() {
    return(
        
            <form className="max-w-sm ml-4">
                <label
                    htmlFor="countries"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Llenguatge de la web
                </label>
                <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    defaultValue="CA"
                >
                    <option value="CA">
                        Català
                    </option>
                    <option value="ES">Español</option>
                    <option value="EN">English</option>
                </select>
            </form>
    )
}