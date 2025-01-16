import axios from 'axios';
import { useEffect, useState } from 'react';

const TOTAL_PAGES = 3;

const User = () => {
    const [loading, setLoading] = useState(true);
    const [allUsers, setAllUsers] = useState([]);
    const [pageNum, setPageNum] = useState(1);

    const callUser = async () => {
        setLoading(true);
        let response = await axios.get(
            `https://randomuser.me/api/?page=${pageNum}&results=25&seed=abc`
        );
        setAllUsers(response.data.results);
        setLoading(false);
    };

    useEffect(() => {
        if (pageNum <= TOTAL_PAGES) {
            callUser();
        }
    }, [pageNum]);

    const UserCard = ({ data }) => {
        return (
            <div className='p-4 border border-gray-500 rounded bg-white flex items-center'>
                <div>
                    <img
                        src={data.picture.medium}
                        className='w-16 h-16 rounded-full border-2 border-green-600'
                        alt='user'
                    />
                </div>

                <div className='ml-3'>
                    <p className='text-base font-bold'>
                        {data.name.first} {data.name.last}
                    </p>
                    <p className='text-sm text-gray-800'>
                        {data.location.city}, {data.location.country}
                    </p>
                    <p className='text-sm text-gray-500 break-all'>
                        {data.email}
                    </p>
                </div>
            </div>
        );
    };

    return (
        <div className='mx-44 bg-gray-100 p-6'>
            <h1 className='text-3xl text-center mt-4 mb-10'>All users</h1>

            <div className='grid grid-cols-3 gap-4'>
                {allUsers.length > 0 &&
                    allUsers.map((user, i) => {
                        return (
                            <div key={`${user.name.first}-${i}`}>
                                <UserCard data={user} />
                            </div>
                        );
                    })}
            </div>
            {loading && <p className='text-center'>loading...</p>}
        </div>
    );
};

export default User;