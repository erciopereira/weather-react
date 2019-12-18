import styled from 'styled-components';

export const Area = styled.div`
.MuiAppBar-colorPrimary {
    color: #F5F5F5;
    background-color: #3094d0;
}
.city--blumenau{
    color: #FFF;
    font-weight:500;
}
.teste{
    display:flex;
    align-items:center;
    justify-content:center;
    
    .icon{
    margin-bottom: 10px
    }
    .temp--blumenau{
        margin-left: 15px;
        color: #FFF;
        font-weight:700;
    }
    .summary--blumenau{
        margin-left: 30px;
        color: #F5F5F5;
    }
    .date--blumenau{
        color: #F5F5F5;
    }
}

ul{
    color: #F5F5F5;
    display:flex;
    margin:0;
    padding:10px;
    list-style:none;
}
ul li{
    font-weight:500;
    padding: 0px 10px;
}
`