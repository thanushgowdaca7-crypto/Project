

const CampusMap = () => {
  return (
    <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 flex-1 flex flex-col pt-8 h-full">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Campus Map</h1>
        <p className="text-white/60 text-sm">Visual directory of VVCE blocks and facilities.</p>
      </div>

      <div className="mt-8 flex-1 w-full min-h-[500px] rounded-2xl border border-white/10 bg-[#121212]/40 backdrop-blur-sm p-2 flex flex-col">
        <div className="w-full flex-1 rounded-xl overflow-hidden bg-white/5">
          <iframe
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=8JP9+JF%20Mysuru,%20Karnataka,P.B.%20No.206,%20Kannada%20Sahithya%20Parishath%20Rd,%20III%20Stage,%20Gokulam,%20Mysuru,%20Karnataka%20570017+(Vidyavardhaka%20College)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            className="w-full h-full border-0 min-h-[500px]"
            allowFullScreen
            loading="lazy"
            title="VVCE Campus Map"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default CampusMap;
