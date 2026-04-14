"use client";
import React, { useState, useRef, useEffect } from 'react';
import { FaPaperclip, FaCheckCircle, FaPaperPlane, FaChevronDown } from 'react-icons/fa';
import ReCAPTCHA from "react-google-recaptcha";
import { useLanguage } from '../context/LanguageContext';

const CoordinatorApplicationForm = () => {
    const { t } = useLanguage();
    const recaptchaRef = useRef(null);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        permanentAddress: '',
        currentAddress: '',
        state: '',
        district: '',
        taluk: '',
        panchayat: '',
        preferredRole: '',
        resume: null
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [status, setStatus] = useState({ message: '', type: '' });
    const [errors, setErrors] = useState({});
    const [fileName, setFileName] = useState('');
    const [stateSearch, setStateSearch] = useState('');
    const [showStateDropdown, setShowStateDropdown] = useState(false);
    const stateDropdownRef = useRef(null);
    const [districtSearch, setDistrictSearch] = useState('');
    const [showDistrictDropdown, setShowDistrictDropdown] = useState(false);
    const districtDropdownRef = useRef(null);
    const [showRoleDropdown, setShowRoleDropdown] = useState(false);
    const roleDropdownRef = useRef(null);

    const validateForm = () => {
        let tempErrors = {};
        if (!formData.fullName.trim()) tempErrors.fullName = "Full name is required";
        if (!formData.email) tempErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Email is invalid";
        if (!formData.phone) tempErrors.phone = "Phone number is required";
        if (!formData.permanentAddress.trim()) tempErrors.permanentAddress = "Permanent address is required";
        if (!formData.state) tempErrors.state = "State is required";
        if (!formData.district) tempErrors.district = "District is required";
        if (!formData.preferredRole) tempErrors.preferredRole = "Role is required";
        if (!formData.resume) tempErrors.resume = "Resume is required";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    // Indian States and Union Territories
    const indianStates = [
        'Andhra Pradesh',
        'Arunachal Pradesh',
        'Assam',
        'Bihar',
        'Chhattisgarh',
        'Goa',
        'Gujarat',
        'Haryana',
        'Himachal Pradesh',
        'Jharkhand',
        'Karnataka',
        'Kerala',
        'Madhya Pradesh',
        'Maharashtra',
        'Manipur',
        'Meghalaya',
        'Mizoram',
        'Nagaland',
        'Odisha',
        'Punjab',
        'Rajasthan',
        'Sikkim',
        'Tamil Nadu',
        'Telangana',
        'Tripura',
        'Uttar Pradesh',
        'Uttarakhand',
        'West Bengal'
    ];

    // Districts by state (sample data)
    const districtsByState = {
        'Andhra Pradesh': ['Alluri Sitharama Raju', 'Anakapalli', 'Anantapuramu', 'Annamayya', 'Bapatla', 'Chittoor', 'East Godavari', 'Eluru', 'Guntur', 'Kakinada', 'Konaseema', 'Krishna', 'Kurnool', 'Nandyal', 'NTR', 'Palnadu', 'Parvathipuram Manyam', 'Prakasam', 'Srikakulam', 'Sri Potti Sriramulu Nellore', 'Sri Sathya Sai', 'Tirupati', 'Visakhapatnam', 'Vizianagaram', 'West Godavari', 'YSR Kadapa', 'West Godavari', 'YSR Kadapa'],
        'Arunachal Pradesh': ['Tawang', 'West Kameng', 'East Kameng', 'Pakke Kessang', 'Papum Pare', 'Kurung Kumey', 'Kra Daadi', 'Lower Subansiri', 'Upper Subansiri', 'Kamle', 'West Siang', 'East Siang', 'Siang', 'Upper Siang', 'Lower Siang', 'Lower Dibang Valley', 'Dibang Valley', 'Anjaw', 'Lohit', 'Namsai', 'Changlang', 'Tirap', 'Longding', 'Leparada', 'Shi Yomi', 'Keyi Panyor'],
        'Assam': ['Bajali', 'Baksa', 'Barpeta', 'Biswanath', 'Bongaigaon', 'Cachar', 'Charaideo', 'Chirang', 'Darrang', 'Dhemaji', 'Dhubri', 'Dibrugarh', 'Dima Hasao', 'Goalpara', 'Golaghat', 'Hailakandi', 'Hojai', 'Jorhat', 'Kamrup', 'Kamrup Metropolitan', 'Karbi Anglong', 'West Karbi Anglong', 'Karimganj', 'Kokrajhar', 'Lakhimpur', 'Majuli', 'Morigaon', 'Nagaon', 'Nalbari', 'Sivasagar', 'Sonitpur', 'South Salmara-Mankachar', 'Tinsukia', 'Udalguri', 'Tamulpur'],
        'Bihar': ['Araria', 'Arwal', 'Aurangabad', 'Banka', 'Begusarai', 'Bhagalpur', 'Bhojpur', 'Buxar', 'Darbhanga', 'East Champaran', 'Gaya', 'Gopalganj', 'Jamui', 'Jehanabad', 'Kaimur', 'Katihar', 'Khagaria', 'Kishanganj', 'Lakhisarai', 'Madhepura', 'Madhubani', 'Munger', 'Muzaffarpur', 'Nalanda', 'Nawada', 'Patna', 'Purnia', 'Rohtas', 'Saharsa', 'Samastipur', 'Saran', 'Sheikhpura', 'Sheohar', 'Sitamarhi', 'Siwan', 'Supaul', 'Vaishali', 'West Champaran'],
        'Chhattisgarh': ['Balod', 'Baloda Bazar', 'Balrampur', 'Bastar', 'Bemetara', 'Bijapur', 'Bilaspur', 'Dantewada', 'Dhamtari', 'Durg', 'Gariaband', 'Gaurela-Pendra-Marwahi', 'Janjgir-Champa', 'Jashpur', 'Kabirdham', 'Kanker', 'Khairagarh-Chhuikhadan-Gandai', 'Kondagaon', 'Korba', 'Korea', 'Mahasamund', 'Manendragarh-Chirmiri-Bharatpur', 'Mohla-Manpur-Ambagarh Chowki', 'Mungeli', 'Narayanpur', 'Raigarh', 'Raipur', 'Rajnandgaon', 'Sakti', 'Sarangarh-Bilaigarh', 'Sukma', 'Surajpur', 'Surguja'],
        'Goa': ['North Goa', 'South Goa'],
        'Gujarat': ['Ahmedabad', 'Amreli', 'Anand', 'Aravalli', 'Banaskantha', 'Bharuch', 'Bhavnagar', 'Botad', 'Chhota Udaipur', 'Dahod', 'Dang', 'Devbhumi Dwarka', 'Gandhinagar', 'Gir Somnath', 'Jamnagar', 'Junagadh', 'Kheda', 'Kutch', 'Mahisagar', 'Mehsana', 'Morbi', 'Narmada', 'Navsari', 'Panchmahal', 'Patan', 'Porbandar', 'Rajkot', 'Sabarkantha', 'Surat', 'Surendranagar', 'Tapi', 'Vadodara', 'Valsad'],
        'Haryana': ['Ambala', 'Bhiwani', 'Charkhi Dadri', 'Faridabad', 'Fatehabad', 'Gurugram', 'Hisar', 'Jhajjar', 'Jind', 'Kaithal', 'Karnal', 'Kurukshetra', 'Mahendragarh', 'Nuh', 'Palwal', 'Panchkula', 'Panipat', 'Rewari', 'Rohtak', 'Sirsa', 'Sonipat', 'Yamunanagar'],
        'Himachal Pradesh': ['Bilaspur', 'Chamba', 'Hamirpur', 'Kangra', 'Kinnaur', 'Kullu', 'Lahaul & Spiti', 'Mandi', 'Shimla', 'Sirmaur', 'Solan', 'Una'],
        'Jharkhand': ['Bokaro', 'Chatra', 'Deoghar', 'Dhanbad', 'Dumka', 'East Singhbhum', 'Garhwa', 'Giridih', 'Godda', 'Gumla', 'Hazaribagh', 'Jamtara', 'Khunti', 'Koderma', 'Latehar', 'Lohardaga', 'Pakur', 'Palamu', 'Ramgarh', 'Ranchi', 'Sahibganj', 'Seraikela-Kharsawan', 'Simdega', 'West Singhbhum'],
        'Karnataka': ['Bagalkot', 'Ballari', 'Belagavi', 'Bengaluru Rural', 'Bengaluru Urban', 'Bidar', 'Chamarajanagar', 'Chikkaballapur', 'Chikkamagaluru', 'Chitradurga', 'Dakshina Kannada', 'Davanagere', 'Dharwad', 'Gadag', 'Hassan', 'Haveri', 'Kalaburagi', 'Kodagu', 'Kolar', 'Koppal', 'Mandya', 'Mysuru', 'Raichur', 'Ramanagara', 'Shivamogga', 'Tumakuru', 'Udupi', 'Uttara Kannada', 'Vijayapura', 'Yadgir', 'Vijayanagara'],
        'Kerala': ['Thiruvananthapuram', 'Kollam', 'Pathanamthitta', 'Alappuzha', 'Kottayam', 'Idukki', 'Ernakulam', 'Thrissur', 'Palakkad', 'Malappuram', 'Kozhikode', 'Wayanad', 'Kannur', 'Kasaragod'],
        'Madhya Pradesh': ['Agar Malwa', 'Alirajpur', 'Anuppur', 'Ashoknagar', 'Balaghat', 'Barwani', 'Betul', 'Bhind', 'Bhopal', 'Burhanpur', 'Chhatarpur', 'Chhindwara', 'Damoh', 'Datia', 'Dewas', 'Dhar', 'Dindori', 'Guna', 'Gwalior', 'Harda', 'Hoshangabad (Narmadapuram)', 'Indore', 'Jabalpur', 'Jhabua', 'Katni', 'Khandwa', 'Khargone', 'Maihar', 'Mandla', 'Mandsaur', 'Morena', 'Narsinghpur', 'Neemuch', 'Niwari', 'Panna', 'Pandhurna', 'Raisen', 'Rajgarh', 'Ratlam', 'Rewa', 'Sagar', 'Satna', 'Sehore', 'Seoni', 'Shahdol', 'Shajapur', 'Sheopur', 'Shivpuri', 'Sidhi', 'Singrauli', 'Tikamgarh', 'Ujjain', 'Umaria', 'Vidisha.'],
        'Maharashtra': ['Ahmednagar', 'Akola', 'Amravati', 'Aurangabad (Chhatrapati Sambhajinagar)', 'Beed', 'Bhandara', 'Buldhana', 'Chandrapur', 'Dhule', 'Gadchiroli', 'Gondia', 'Hingoli', 'Jalgaon', 'Jalna', 'Kolhapur', 'Latur', 'Mumbai City', 'Mumbai Suburban', 'Nagpur', 'Nanded', 'Nandurbar', 'Nashik', 'Osmanabad (Dharashiv)', 'Palghar', 'Parbhani', 'Pune', 'Raigad', 'Ratnagiri', 'Sangli', 'Satara', 'Sindhudurg', 'Solapur', 'Thane', 'Wardha', 'Washim', 'Yavatmal'],
        'Manipur': ['Bishnupur', 'Chandel', 'Churachandpur', 'Imphal East', 'Imphal West', 'Jiribam', 'Kakching', 'Kamjong', 'Kangpokpi', 'Noney', 'Pherzawl', 'Senapati', 'Tamenglong', 'Tengnoupal', 'Thoubal', 'Ukhrul'],
        'Meghalaya': ['East Garo Hills', 'East Jaintia Hills', 'East Khasi Hills', 'Eastern West Khasi Hills', 'North Garo Hills', 'Ri Bhoi', 'South Garo Hills', 'South West Garo Hills', 'South West Khasi Hills', 'West Garo Hills', 'West Jaintia Hills', 'West Khasi Hills'],
        'Mizoram': ['Aizawl', 'Champhai', 'Hnahthial', 'Khawzawl', 'Kolasib', 'Lawngtlai', 'Lunglei', 'Mamit', 'Saiha (Siaha)', 'Serchhip', 'Saitual'],
        'Nagaland': ['Chümoukedima', 'Dimapur', 'Kiphire', 'Kohima', 'Longleng', 'Mokokchung', 'Mon', 'Niuland', 'Noklak', 'Peren', 'Phek', 'Shamator', 'Tseminyu', 'Tuensang', 'Wokha', 'Zunheboto'],
        'Odisha': ['Angul', 'Balangir', 'Balasore', 'Bargarh', 'Bhadrak', 'Boudh', 'Cuttack', 'Deogarh', 'Dhenkanal', 'Gajapati', 'Ganjam', 'Jagatsinghpur', 'Jajpur', 'Jharsuguda', 'Kalahandi', 'Kandhamal', 'Kendrapara', 'Kendujhar', 'Khordha', 'Koraput', 'Malkangiri', 'Mayurbhanj', 'Nabarangpur', 'Nayagarh', 'Nuapada', 'Puri', 'Rayagada', 'Sambalpur', 'Subarnapur', 'Sundargarh'],
        'Punjab': ['Amritsar', 'Barnala', 'Bathinda', 'Faridkot', 'Fatehgarh Sahib', 'Fazilka', 'Ferozepur', 'Gurdaspur', 'Hoshiarpur', 'Jalandhar', 'Kapurthala', 'Ludhiana', 'Malerkotla', 'Mansa', 'Moga', 'Pathankot', 'Patiala', 'Rupnagar', 'Sahibzada Ajit Singh Nagar (Mohali)', 'Sangrur', 'Shaheed Bhagat Singh Nagar', 'Sri Muktsar Sahib', 'Tarn Taran'],
        'Rajasthan': ['Ajmer', 'Alwar', 'Anupgarh', 'Balotra', 'Banswara', 'Baran', 'Barmer', 'Beawar', 'Bharatpur', 'Bhilwara', 'Bikaner', 'Bundi', 'Chittorgarh', 'Churu', 'Dausa', 'Deeg', 'Dholpur', 'Didwana-Kuchaman', 'Dudu', 'Ganganagar', 'Gangapur City', 'Hanumangarh', 'Jaipur', 'Jaipur Rural', 'Jaisalmer', 'Jalore', 'Jhalawar', 'Jhunjhunu', 'Jodhpur', 'Jodhpur Rural', 'Karauli', 'Kekri', 'Khairthal-Tijara', 'Kota', 'Kotputli-Behror', 'Nagaur', 'Neem Ka Thana', 'Pali', 'Phalodi', 'Pratapgarh', 'Rajsamand', 'Salumbar', 'Sanchore', 'Sawai Madhopur', 'Shahpura', 'Sikar', 'Sirohi', 'Tonk', 'Udaipur'],
        'Sikkim': ['Gangtok', 'Gyalshing', 'Mangan', 'Namchi', 'Pakyong', 'Soreng'],
        'Tamil Nadu': ['Ariyalur', 'Chengalpattu', 'Chennai', 'Coimbatore', 'Cuddalore', 'Dharmapuri', 'Dindigul', 'Erode', 'Kallakurichi', 'Kanchipuram', 'Kanniyakumari', 'Karur', 'Krishnagiri', 'Madurai', 'Mayiladuthurai', 'Nagapattinam', 'Namakkal', 'Nilgiris', 'Perambalur', 'Pudukkottai', 'Ramanathapuram', 'Ranipet', 'Salem', 'Sivaganga', 'Tenkasi', 'Thanjavur', 'Theni', 'Thiruvallur', 'Thiruvarur', 'Thoothukudi', 'Tiruchirappalli', 'Tirunelveli', 'Tirupattur', 'Tiruppur', 'Tiruvannamalai', 'Vellore', 'Viluppuram', 'Virudhunagar'],
        'Telangana': ['Adilabad', 'Bhadradri Kothagudem', 'Hanumakonda', 'Hyderabad', 'Jagtial', 'Jangaon', 'Jayashankar Bhupalpally', 'Jogulamba Gadwal', 'Kamareddy', 'Karimnagar', 'Khammam', 'Komaram Bheem', 'Mahabubabad', 'Mahabubnagar', 'Mancherial', 'Medak', 'Medchal–Malkajgiri', 'Mulugu', 'Nagarkurnool', 'Nalgonda', 'Narayanpet', 'Nirmal', 'Nizamabad', 'Peddapalli', 'Rajanna Sircilla', 'Rangareddy', 'Sangareddy', 'Siddipet', 'Suryapet', 'Vikarabad', 'Wanaparthy', 'Warangal', 'Yadadri Bhuvanagiri'],
        'Tripura': ['Dhalai', 'Gomati', 'Khowai', 'North Tripura', 'Sepahijala', 'South Tripura', 'Unakoti', 'West Tripura'],
        'Uttar Pradesh': ['Agra', 'Aligarh', 'Ambedkar Nagar', 'Amethi', 'Amroha', 'Auraiya', 'Ayodhya', 'Azamgarh', 'Baghpat', 'Bahraich', 'Ballia', 'Balrampur', 'Banda', 'Barabanki', 'Bareilly', 'Basti', 'Bijnor', 'Budaun', 'Bulandshahr', 'Chandauli', 'Chitrakoot', 'Deoria', 'Etah', 'Etawah', 'Farrukhabad', 'Fatehpur', 'Firozabad', 'Gautam Buddha Nagar', 'Ghaziabad', 'Ghazipur', 'Gonda', 'Gorakhpur', 'Hamirpur', 'Hapur', 'Hardoi', 'Hathras', 'Jalaun', 'Jaunpur', 'Jhansi', 'Kannauj', 'Kanpur Dehat', 'Kanpur Nagar', 'Kasganj', 'Kaushambi', 'Kushinagar', 'Lakhimpur Kheri', 'Lalitpur', 'Lucknow', 'Maharajganj', 'Mahoba', 'Mainpuri', 'Mathura', 'Mau', 'Meerut', 'Mirzapur', 'Moradabad', 'Muzaffarnagar', 'Pilibhit', 'Pratapgarh', 'Prayagraj', 'Raebareli', 'Rampur', 'Saharanpur', 'Sambhal', 'Sant Kabir Nagar', 'Sant Ravidas Nagar', 'Shahjahanpur', 'Shamli', 'Shravasti', 'Siddharthnagar', 'Sitapur', 'Sonbhadra', 'Sultanpur', 'Unnao', 'Varanasi'],
        'Uttarakhand': ['Almora', 'Bageshwar', 'Chamoli', 'Champawat', 'Dehradun', 'Haridwar', 'Nainital', 'Pauri Garhwal', 'Pithoragarh', 'Rudraprayag', 'Tehri Garhwal', 'Udham Singh Nagar', 'Uttarkashi'],
        'West Bengal': ['Alipurduar', 'Bankura', 'Birbhum', 'Cooch Behar', 'Dakshin Dinajpur', 'Darjeeling', 'Hooghly', 'Howrah', 'Jalpaiguri', 'Jhargram', 'Kalimpong', 'Kolkata', 'Malda', 'Murshidabad', 'Nadia', 'North 24 Parganas', 'Paschim Bardhaman', 'Paschim Medinipur', 'Purba Bardhaman', 'Purba Medinipur', 'Purulia', 'South 24 Parganas', 'Uttar Dinajpur'],
    };

    const roles = [
        'Panchayath Coordinator',
        'Taluk Coordinator',
        'District Coordinator',
        'State Head'
    ];

    const availableDistricts = formData.state ? (districtsByState[formData.state] || []) : [];

    const filteredStates = indianStates.filter(state =>
        state.toLowerCase().includes(stateSearch.toLowerCase())
    );

    const filteredDistricts = availableDistricts.filter(district =>
        district.toLowerCase().includes(districtSearch.toLowerCase())
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleStateSelect = (state) => {
        setFormData(prev => ({
            ...prev,
            state: state,
            district: '',
            taluk: '',
            panchayat: ''
        }));
        setStateSearch('');
        setDistrictSearch('');
        setShowStateDropdown(false);
    };

    const handleDistrictSelect = (district) => {
        setFormData(prev => ({
            ...prev,
            district: district,
            taluk: '',
            panchayat: ''
        }));
        setDistrictSearch('');
        setShowDistrictDropdown(false);
    };

    const handleRoleSelect = (role) => {
        setFormData(prev => ({
            ...prev,
            preferredRole: role
        }));
        setShowRoleDropdown(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (stateDropdownRef.current && !stateDropdownRef.current.contains(event.target)) {
                setShowStateDropdown(false);
            }
            if (districtDropdownRef.current && !districtDropdownRef.current.contains(event.target)) {
                setShowDistrictDropdown(false);
            }
            if (roleDropdownRef.current && !roleDropdownRef.current.contains(event.target)) {
                setShowRoleDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData(prev => ({
                ...prev,
                resume: file
            }));
            setFileName(file.name);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            setStatus({ message: 'Please fill all required fields.', type: 'error' });
            setTimeout(() => setStatus({ message: '', type: '' }), 5000);
            return;
        }

        const token = recaptchaRef.current.getValue();
        if (!token) {
            setStatus({ message: 'Please verify that you are not a robot.', type: 'error' });
            setTimeout(() => setStatus({ message: '', type: '' }), 5000);
            return;
        }

        setIsSubmitting(true);
        setStatus({ message: 'Submitting application...', type: 'info' });

        try {
            const data = new FormData();
            Object.keys(formData).forEach(key => {
                data.append(key, formData[key]);
            });
            data.append('recaptchaToken', token);

            const response = await fetch('/api/careers', {
                method: 'POST',
                body: data,
            });

            const result = await response.json();

            if (result.success) {
                setIsSubmitted(true);
                setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    permanentAddress: '',
                    currentAddress: '',
                    state: '',
                    district: '',
                    taluk: '',
                    panchayat: '',
                    preferredRole: '',
                    resume: null
                });
                setFileName('');
                recaptchaRef.current.reset();
                setStatus({ message: '', type: '' });

                // Show form again after 5 seconds
                setTimeout(() => {
                    setIsSubmitted(false);
                }, 5000);
            } else {
                setStatus({ message: result.message || 'Submission failed.', type: 'error' });
                setTimeout(() => setStatus({ message: '', type: '' }), 5000);
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus({ message: 'An error occurred. Please try again.', type: 'error' });
            setTimeout(() => setStatus({ message: '', type: '' }), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className="application-success">
                <div className="success-icon">
                    <FaCheckCircle />
                </div>
                <h3>{t('careers.form.successTitle')}</h3>
                <p>{t('careers.form.successDesc')}</p>
            </div>
        );
    }

    return (
        <div className="coordinator-form-container">
            <form onSubmit={handleSubmit} className="coordinator-form">
                {/* Section 1: Personal Details */}
                <div className="form-section">
                    <h4 className="section-title">{t('careers.form.personalDetails')}</h4>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="fullName">{t('careers.form.fullName')} <span className="required">*</span></label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder={t('careers.form.placeholders.fullName')}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">{t('careers.form.email')} <span className="required">*</span></label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder={t('careers.form.placeholders.email')}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="phone">{t('careers.form.phone')} <span className="required">*</span></label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder={t('careers.form.placeholders.phone')}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="permanentAddress">{t('careers.form.permanentAddress')} <span className="required">*</span></label>
                        <textarea
                            id="permanentAddress"
                            name="permanentAddress"
                            value={formData.permanentAddress}
                            onChange={handleChange}
                            placeholder={t('careers.form.placeholders.permanentAddress')}
                            rows="3"
                            required
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="currentAddress">{t('careers.form.currentAddress')} <span className="required">*</span></label>
                        <textarea
                            id="currentAddress"
                            name="currentAddress"
                            value={formData.currentAddress}
                            onChange={handleChange}
                            placeholder={t('careers.form.placeholders.currentAddress')}
                            rows="3"
                            required
                        ></textarea>
                    </div>
                </div>

                {/* Section 2: Preferred Working Location */}
                <div className="form-section">
                    <h4 className="section-title">{t('careers.form.workingLocation')}</h4>
                    <div className="form-row">
                        <div className="form-group" ref={stateDropdownRef}>
                            <label htmlFor="state">{t('careers.form.state')} <span className="required">*</span></label>
                            <div className="searchable-dropdown">
                                <div className="dropdown-input-wrapper" onClick={() => setShowStateDropdown(!showStateDropdown)}>
                                    <input
                                        type="text"
                                        id="state"
                                        name="state"
                                        value={showStateDropdown ? stateSearch : formData.state}
                                        onChange={(e) => {
                                            setStateSearch(e.target.value);
                                            setShowStateDropdown(true);
                                        }}
                                        onFocus={() => {
                                            setStateSearch(formData.state);
                                            setShowStateDropdown(true);
                                        }}
                                        placeholder={t('careers.form.placeholders.state')}
                                        autoComplete="off"
                                        required
                                    />
                                    <FaChevronDown className={`dropdown-icon ${showStateDropdown ? 'open' : ''}`} />
                                </div>
                                {showStateDropdown && (
                                    <div className="dropdown-menu">
                                        {filteredStates.length > 0 ? (
                                            filteredStates.map((state, index) => (
                                                <div key={index} className="dropdown-item" onClick={() => handleStateSelect(state)}>
                                                    {state}
                                                </div>
                                            ))
                                        ) : (
                                            <div className="dropdown-item no-results">{t('careers.form.placeholders.noStates')}</div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="form-group" ref={districtDropdownRef}>
                            <label htmlFor="district">{t('careers.form.district')} <span className="required">*</span></label>
                            <div className="searchable-dropdown">
                                <div className="dropdown-input-wrapper" onClick={() => formData.state && setShowDistrictDropdown(!showDistrictDropdown)}>
                                    <input
                                        type="text"
                                        id="district"
                                        name="district"
                                        value={showDistrictDropdown ? districtSearch : formData.district}
                                        onChange={(e) => {
                                            setDistrictSearch(e.target.value);
                                            setShowDistrictDropdown(true);
                                        }}
                                        onFocus={() => {
                                            if (formData.state) {
                                                setDistrictSearch(formData.district);
                                                setShowDistrictDropdown(true);
                                            }
                                        }}
                                        placeholder={formData.state ? t('careers.form.placeholders.district') : t('careers.form.placeholders.districtFirst')}
                                        autoComplete="off"
                                        disabled={!formData.state}
                                        required
                                    />
                                    <FaChevronDown className={`dropdown-icon ${showDistrictDropdown ? 'open' : ''}`} />
                                </div>
                                {showDistrictDropdown && formData.state && (
                                    <div className="dropdown-menu">
                                        {filteredDistricts.length > 0 ? (
                                            filteredDistricts.map((district, index) => (
                                                <div key={index} className="dropdown-item" onClick={() => handleDistrictSelect(district)}>
                                                    {district}
                                                </div>
                                            ))
                                        ) : (
                                            <div className="dropdown-item no-results">{t('careers.form.placeholders.noDistricts')}</div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="taluk">{t('careers.form.taluk')} <span className="required">*</span></label>
                            <input
                                type="text"
                                id="taluk"
                                name="taluk"
                                value={formData.taluk}
                                onChange={handleChange}
                                placeholder={t('careers.form.placeholders.taluk')}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="panchayat">{t('careers.form.panchayat')} <span className="required">*</span></label>
                            <input
                                type="text"
                                id="panchayat"
                                name="panchayat"
                                value={formData.panchayat}
                                onChange={handleChange}
                                placeholder={t('careers.form.placeholders.panchayat')}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group" ref={roleDropdownRef}>
                        <label htmlFor="preferredRole">{t('careers.form.preferredRole')} <span className="required">*</span></label>
                        <div className="searchable-dropdown">
                            <div className="dropdown-input-wrapper" onClick={() => setShowRoleDropdown(!showRoleDropdown)}>
                                <input
                                    type="text"
                                    id="preferredRole"
                                    name="preferredRole"
                                    value={formData.preferredRole}
                                    readOnly
                                    placeholder={t('careers.form.placeholders.role')}
                                    required
                                />
                                <FaChevronDown className={`dropdown-icon ${showRoleDropdown ? 'open' : ''}`} />
                            </div>
                            {showRoleDropdown && (
                                <div className="dropdown-menu">
                                    {roles.map((role, index) => (
                                        <div
                                            key={index}
                                            className="dropdown-item"
                                            onClick={() => handleRoleSelect(role)}
                                        >
                                            {role}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="form-group file-upload-group">
                    <label>{t('careers.form.resume')} <span className="required">*</span></label>
                    <div className="file-upload-wrapper">
                        <input
                            type="file"
                            id="resume"
                            name="resume"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                            className={`file-input ${errors.resume ? 'input-error' : ''}`}
                            required
                        />
                        <label htmlFor="resume" className="file-label">
                            <FaPaperclip />
                            <span>{fileName || t('careers.form.uploadResume')}</span>
                        </label>
                    </div>
                    {errors.resume && <span className="error-text">{errors.resume}</span>}
                </div>

                <div className="recaptcha-wrapper" style={{ marginBottom: '20px' }}>
                    <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "YOUR_SITE_KEY_HERE"}
                    />
                </div>

                {status.message && (
                    <div className={`form-status ${status.type}`} style={{ marginBottom: '20px', padding: '10px', borderRadius: '5px' }}>
                        {status.message}
                    </div>
                )}

                <div className="form-actions">
                    <button type="submit" className="btn-submit" disabled={isSubmitting}>
                        {isSubmitting ? t('careers.form.submitting') : (
                            <>
                                <FaPaperPlane /> {t('careers.form.submit')}
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CoordinatorApplicationForm;