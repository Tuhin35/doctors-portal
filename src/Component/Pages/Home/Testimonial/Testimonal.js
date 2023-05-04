import React from 'react';
import people from '../../../../assets/images/people1.png'
const Testimonal = () => {
    const cardData = [
        {
            name: 'Raihan Uddin Tuhin',
            place: "BrahmonBaria",
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, obcaecati modi ducimus doloremque recusandae minima alias odio error rem, dolor quisquam consectetur esse hic at ullam molestias ratione, est sequi?',
            img: people
        },
        {
            name: 'Raihan Uddin Tuhin',
            place: "BrahmonBaria",
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, obcaecati modi ducimus doloremque recusandae minima alias odio error rem, dolor quisquam consectetur esse hic at ullam molestias ratione, est sequi?',
            img: people
        },
        {
            name: 'Raihan Uddin Tuhin',
            place: "BrahmonBaria",
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, obcaecati modi ducimus doloremque recusandae minima alias odio error rem, dolor quisquam consectetur esse hic at ullam molestias ratione, est sequi?',
            img: people
        }
    ]
    return (
        <div>
            <div>
                <h1>Testimonial</h1>
                <h1>What Our Patients Says</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    cardData.map(data => <div className='card'>
                        <div className="grid grid-cols-1 card-body px-4 py-16 mx-auto  md:px-24 lg:px-8 lg:py-20">
                            <div className=''>
                                {data.description}
                            </div>
                            <div className="grid gap-10 mt-10 justify-start row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">
                                <div className="flex">
                                    <img
                                        className="object-cover w-20 h-20 mr-4 border-2 border-secondary rounded-full shadow"
                                        src={data.img}
                                        alt="Person"
                                    />
                                    <div className="flex flex-col justify-center">
                                        <p className="text-lg font-bold">{data.name}</p>
                                        <p className="text-sm text-gray-800">{data.place}</p>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>)
                }
            </div>
        </div>
    );
};

export default Testimonal;