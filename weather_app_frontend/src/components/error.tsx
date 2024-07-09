import React from 'react';

const Error: React.FC = ({ }) => {
    return (
      <div className="bg-gradient-to-b from-primary to-secondary py-8 px-16 rounded-xl">
            <div className="bg-back m-auto max-w-[144px] h-[144px] flex items-center justify-center rounded-xl">
                <div className="bg-primary w-[100px] h-[100px] rounded-full flex items-center justify-center text-[48px] font-bold text-back animate-bounce">!</div>
            </div>
            <h2 className="text-back text-center font-[MonstBold] text-xl font-bold mt-4">Search Another city</h2>
      </div>
    );
}

export default Error;