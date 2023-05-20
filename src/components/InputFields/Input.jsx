import { useField } from "formik";

export const Input = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div className="w-full">
            <label className="block mb-2 text-xs md:text-sm font-medium text-gray-800" htmlFor={props.name}>
                {label}
            </label>
            <input
                className="bg-gray-50 border border-gray-300 text-xs md:text-sm rounded-md block w-full p-2.5"
                {...field}
                {...props}
            />
            {meta.touched && meta.error ? <p className="text-sm italic text-red-600 mt-1">{meta.error}</p> : null}
        </div>
    );
};

export const Select = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div className="flex flex-col items-start">
            <label className="block mb-2 text-sm font-medium text-gray-800" htmlFor={props.name}>
                {label}
            </label>
            <select
                className="bg-gray-50 border border-gray-300 text-sm rounded-md block w-full p-2.5"
                {...field}
                {...props}
            />
            {meta.touched && meta.error ? <p className="text-xs text-red-600 mt-1 italic">{meta.error}</p> : null}
        </div>
    );
};

export const Radio = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div className="flex items-center justify-start gap-1">
            <input {...field} {...props} />
            <label className="text-sm text-gray-800" htmlFor={props.name}>
                {label}
            </label>
            {meta.touched && meta.error ? <p className="text-xs text-red-600 mt-1 italic">{meta.error}</p> : null}
        </div>
    );
};
