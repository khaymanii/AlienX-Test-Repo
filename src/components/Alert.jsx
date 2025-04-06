import React from "react";
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimesCircle,
} from "react-icons/fa";

const Alert = ({ type = "success", title, message }) => {
  const alertStyles = {
    success: {
      bgColor: "bg-green-50",
      borderColor: "border-green-400",
      icon: <FaCheckCircle className="text-green-600 w-5 h-5" />,
      textColor: "text-gray-900",
    },
    warning: {
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-400",
      icon: <FaExclamationTriangle className="text-yellow-600 w-5 h-5" />,
      textColor: "text-gray-900",
    },
    failure: {
      bgColor: "bg-red-50",
      borderColor: "border-red-400",
      icon: <FaTimesCircle className="text-red-600 w-5 h-5" />,
      textColor: "text-gray-900",
    },
  };

  const { bgColor, borderColor, icon, textColor } =
    alertStyles[type] || alertStyles.success;

  return (
    <div
      className={`rounded-xl border ${borderColor} ${bgColor} p-4 w-[250px]`}
    >
      <div className="flex items-start gap-2">
        {icon}
        <div className="flex-1">
          <strong className={`block text-sm font-semibold ${textColor}`}>
            {title}
          </strong>
          <p className="mt-1 text-xs text-gray-700">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Alert;
