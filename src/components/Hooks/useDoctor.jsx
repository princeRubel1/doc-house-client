// import { useQuery } from "@tanstack/react-query";

// const useDoctor = () => {
//   const { data: doctors = [], isPending: loading } = useQuery({
//     queryKey: ["doctors"],
//     queryFn: async () => {
//       const res = await fetch("http://localhost:4000/doctors");
//       return res.json();
//     },
//   });
//   return [doctors];
//   //   const [doctors, setDoctors] = useState([]);
//   //   useEffect(() => {
//   //     fetch("doctors.json")
//   //       .then((res) => res.json())
//   //       .then((data) => setDoctors(data));
//   //   }, []);
// };
// export default useDoctor;
