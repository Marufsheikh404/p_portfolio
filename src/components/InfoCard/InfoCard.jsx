
const InfoCard = ({title, content}) => {
    return (
         <div className="bg-[#141414] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="font-bold text-xl text-gray-100 mb-3">{title}</h3>
            <p className="text-slate-400 leading-relaxed">{content}</p>
        </div>
    );
};

export default InfoCard;