import React, { useState} from "react";
import { useNavigate } from 'react-router-dom';
import { OutlinedInput,Button,Typography,Box,FormControl} from '@material-ui/core';
import { useAuth } from "/home/indhu/Documents/RESOURCING-BOT/RESOURCING-BOT/resumescreeing_engine/resumescreeing_engine/src/Authcontext.js";

function Candidateform(){

    const navigate = useNavigate();
    const [Candidateemail, setCandidateEmail] = useState('');
    const [CandidateemailError, setCandidateEmailError] = useState('');
    const [Candidatename, setCandidateName] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { login } = useAuth();
    const handleSubmit = async (e) => {
        e.preventDefault();
      
        if (validate()) {
          try {
            
            setLoading(true); 
            setError(null); 
      
            const response = await fetch('http://localhost:4000/api/candidateform', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ Candidatename, Candidateemail }),
            });
            console.log(response);
            if (response.ok) {
              const data = await response.json();

              // Store the token in localStorage or cookies for future requests
              localStorage.setItem('token', data.token);

              login(data, data.token);
              navigate('/Writtentest'); 
            } else {
              const errorData = await response.json();

              setError(errorData.error); // Set error message from response
              setLoading(false); // Clear loading state
            }
          } catch (error) {
            console.error('Login failed:', error);
            setError('An error occurred '); // Set a general error message
          }
        }
      };
      
      const validate = () => {
        let valid = true;
    
        //  email validation
        if (!Candidateemail) {
          setCandidateEmailError('Email is required');
          valid = false;
        } else if (!/\S+@\S+\.\S+/.test(Candidateemail)) {
          setCandidateEmailError('Invalid email');
          valid = false;
        } else {
          setCandidateEmailError('');
        }
    
        return valid;
      };

      return (

        <div style={{ display: 'grid'}}> 
    
        <div className="container">
        <Box
        component="div"
        border={7}
        borderColor="primary"
        display= 'block'
        p={2}
      >
          <Typography variant="h3" fontWeight="bold" color="textPrimary" style={{ marginTop: '35px' }}>
          Candidate Details
          </Typography>
          <div style={{ marginTop: '40px' }} />
          <form onSubmit={handleSubmit}>
          <FormControl fullWidth margin="normal">
          <label>CandidateName</label>
          <OutlinedInput
              id="Candidatename"
              type="Candidatename"
              value={Candidatename}
              onChange={(e) => setCandidateName(e.target.value)}
              placeholder="enter your name"
              fullWidth
              margin="dense"
              inputProps={{
                style: { padding: '12px', backgroundColor: 'white' },
              }}
              sx={{ mb: 2 }}
              label="Email"
            /> 
            </FormControl>        
          <FormControl fullWidth margin="normal">
          <label>CandidateEmail</label>
          <OutlinedInput
              id="Candidateemail"
              type="Candidateemail"
              value={Candidateemail}
              onChange={(e) => setCandidateEmail(e.target.value)}
              placeholder="youremail@gmail.com"
              error={CandidateemailError !== ''}
              fullWidth
              margin="dense"
              inputProps={{
                style: { padding: '12px', backgroundColor: 'white' },
              }}
              sx={{ mb: 2 }}
              label="Email"
            /> 
            </FormControl>
            <Button
            type="Start test"
            className="login-btn"
            disabled={loading}
            variant="contained"
            color="primary"
            style={{ height: '40px', width: '120px' }} // Set your preferred height and width
          >   start Test
            </Button>
          </form>
        </Box>
        </div>
        </div>
      )
    };
    
    export default Candidateform;

