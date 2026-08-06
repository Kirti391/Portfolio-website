function InfoItem({ title, value, valueClassName = "text-white" }) {
    return (
        <div>
            <p className="text-sm text-slate-500">
                {title}
            </p>

            <h4 className={`mt-1 font-semibold ${valueClassName}`}>
                {value}
            </h4>
        </div>
    );
}

export default InfoItem;