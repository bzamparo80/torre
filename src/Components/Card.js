const [username, setUsername] = useState("");
const [skills, setSkills] = useState([]);

useEffect(() => {
  const fetchBio = async () => {
    try {
      const response = await axios.get(`https://torre.bio/api/bios/${username}`);
      const bioData = response.data;
      setUsername(bioData.person.name);
      const opportunitiesResponse = await axios.get(`https://torre.co/api/opportunities/${bioData.person.id}`);
      const opportunitiesData = opportunitiesResponse.data;
      setSkills(opportunitiesData.skills);
    } catch (error) {
      console.log(error);
    }
  };
  fetchBio();
}, [username]);
