import styled from 'styled-components';

export const Area = styled.div`

.paper--search{
    padding: 20px;
    margin-top: 20px;
    display:flex;

    .select--state{
    min-width: 300px;

    
    }
    .select--city{
        width: 100%;
        margin-left: 5px;

    }
}
.favorite--area{
    padding: 20px;
    margin-top: 20px;
    display:flex;
    align-items:center;
    justify-content:center;
    .select--favorite{
        min-width: 100%;
    }
}

.result--info{
    padding: 20px;
    margin-top: 20px;
    display:flex;
    align-items:center;
    justify-content:center;


    .city{
        padding: 0px 20px;
        color: #3094d0;
        font-weight:500;
    }

    .icon{
        padding: 0px 10px;
        margin-bottom: 10px
    }
    
    .temp{
        padding: 0px 10px;
        margin-left: 15px;
        color: #3094d0;
        font-weight:700;
    }
    .summary, .date{
        padding: 0px 20px;
        color: #7A7A7A;
    }

}
.result--other--info{
    display:flex;
    align-items:center;
    justify-content:center;
    ul{
        color: #7A7A7A;
        display:flex;
        margin:0;
        padding:10px;
        list-style:none;
    }
    ul li{
        font-weight:500;
        padding: 0px 10px;
    }
}
.favorite--button{
    text-align:center;
    margin-bottom: 20px;
}
.result--forecast{
    
    .title--forecast{
        padding:20px 0px;
        font-weight: 500;
    }
    .expand--false{
        display:flex;
        flex: 1;
        justify-content: space-between;
        .forecast--date{
            margin-left: 100px;
        }
        .temp--max--min{
            margin-right: 80px;
        }
        .temp--max--min span{
            margin: 0px 20px;
            color: #7A7A7A;
        }
    }

    .MuiExpansionPanelDetails-root{
        align-items:center;
        justify-content:center;
    }
    .expand--true{
            ul{
                display:flex;
                align-items:center;
                justify-content:center;
                color: #515151;
                display:flex;
                margin:0;
                padding:10px;
                list-style:none;
            }
                ul li{
                font-weight:500;
                padding: 0px 10px;
            }

            .summary--forecast{
                color: #3094d0;
            }  
        }  
    }

`