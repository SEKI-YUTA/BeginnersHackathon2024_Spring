const GenrusItem = (props) => (
    <div>
        <input type="radio" className="w-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label for="inline-radio" className="pr-4 text-sm font-medium text-gray-900 dark:text-gray-300">
            {props.value}
        </label>
    </div>
);

export default GenrusItem;
