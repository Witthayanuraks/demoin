function Schedule() {
    return (
      <section className="p-8 bg-white">
        <h2 className="text-center text-2xl mb-8">Schedule</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-bold text-gray-700">17:30</div>
            <div>Groom & Guests Arrival to Church</div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-bold text-gray-700">18:00</div>
            <div>Ceremony</div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-bold text-gray-700">19:30</div>
            <div>Bus to Celebration Venue</div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-bold text-gray-700">20:00</div>
            <div>Celebration</div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Schedule;
  