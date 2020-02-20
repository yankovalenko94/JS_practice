import $ from '../core';

$.prototype.animateOverTime = function(dur, cb, fin) {
    let timeStart;

    function _animateOverTime(time) {
        if (!timeStart) {
            timeStart = time;
        }

        let timeElapsed = time - timeStart;
        let complection = Math.min(timeElapsed / dur, 1);

        cb(complection);

        if (timeElapsed < dur) {
            requestAnimationFrame(_animateOverTime);
        } else {
            if (typeof fin === 'function') {
                fin();
            }
        }
    }

    return _animateOverTime;
};

$.prototype.fadeIn = function(dur, display, fin) {
    for (let i = 0; i < this.length; i++) {
        this[i].style.display = display || 'block';

        const _fadeIn = (complection) => {
            this[i].style.opacity = complection;
        };

        const ani = this.animateOverTime(dur, _fadeIn, fin);
        requestAnimationFrame(ani);
    }

    return this;
};

$.prototype.fadeOut = function(dur, fin) {
    for (let i = 0; i < this.length; i++) {
        
        const _fadeOut = (complection) => {
            this[i].style.opacity = 1 - complection;
            if (complection === 1) {
                this[i].style.display = 'none';
            }
        };

        const ani = this.animateOverTime(dur, _fadeOut, fin);
        requestAnimationFrame(ani);
    }

    return this;
};

$.prototype.fadeToggle = function(dur, display, fin) {
    for (let i = 0; i < this.length; i++) {
        if (window.getComputedStyle(this[i]).display === 'none') {
            this[i].style.display = display || 'block';

            const _fadeIn = (complection) => {
                this[i].style.opacity = complection;
            };
    
            const ani = this.animateOverTime(dur, _fadeIn, fin);
            requestAnimationFrame(ani);
        } else {
            const _fadeOut = (complection) => {
                this[i].style.opacity = 1 - complection;
                if (complection === 1) {
                    this[i].style.display = 'none';
                }
            };
    
            const ani = this.animateOverTime(dur, _fadeOut, fin);
            requestAnimationFrame(ani);
        }
    }

    return this;
};