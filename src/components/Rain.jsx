function Rain() {
    const createRaindrops = (count, className, opacity) => {
        const drops = [];
        for (let i = 0; i < count; i++) {
          drops.push(<div key={`${className}-${i}`} className={`raindrop ${className}`} style={{
            left: `${Math.random() * 100}vw`,
            animationDelay: `${-Math.random() * 2}s`,
            animationDuration: `${0.75 + Math.random() * 2}s`,
            opacity: opacity
          }}></div>);
        }
        return drops;
      }
      return <div className="rain">
        {createRaindrops(50, 'back-row', 0.3)} 
        {createRaindrops(75, 'front-row', 0.7)}
        </div>;
}

export default Rain