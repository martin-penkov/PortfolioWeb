import BACKGROUND from '@/assets/background.jpg';

export const Background = () => {
    return (
        <div className="">
            <img className="min-w-full h-full flex justify-center overflow-hidden absolute mx-auto -z-50" src={BACKGROUND} alt="" />
        </div>
    );
}