import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const AllUsers = () => {
  const url = `http://localhost:5000/users`;

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = res.json();
      return data;
    },
  });

  const handleMakeAdmin =(id)=>{
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then(res => res.json())
    .then(data => {
      if(data.modifiedCount > 0){
        toast.success('Make Admin Successfully');
        refetch();
      }
    })
  }

  return (
    <section>
      <h2 className="text-2xl font-bold text-secondary mb-6">All Users</h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra border">
          {/* head */}
          <thead className="bg-secondary">
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user.id}>
                <th>{idx + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{ user?.role !== 'admin' ?<button onClick={()=>handleMakeAdmin(user._id)} className="btn btn-xs btn-primary">Make Admin</button> : <button  className="btn btn-xs btn-secondary"> Admin</button>}</td>
                <td><button className="btn btn-xs btn-warning">Delete</button></td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AllUsers;
