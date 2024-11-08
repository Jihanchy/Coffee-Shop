
const Heading = ({title, subtitle}) => {
    return (
        <div className="flex flex-col items-center justify-center space-y-4 mt-4 py-4">
            <h1 className="text-4xl ">{title}</h1>
            <p>{subtitle}</p>
        </div>
    );
};

export default Heading;