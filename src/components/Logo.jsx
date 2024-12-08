import React from 'react';

const Logo = ({ isLoading }) => {
  return (
    <a href="#home">
      <p className={`w-full bg-transparent p-5 font-semibold ${isLoading ? "text-white" : "text-dark_primary"} font-Paprika`}>
        <span className="text-[#4452d4]">
          {/* &lt;&gt; */}
        </span>
        <span className="text-4xl">🔬</span> {/* تم تكبير الرمز هنا */}
        <span className="text-[#4452d4]">
          {/* &lt;/&gt; */}
        </span>
      </p>
    </a>
  );
}

export default Logo;
