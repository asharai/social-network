const initialState = {
    friends:[
        {
            id:1,
            name:'John Ray',
            city:'Los Angeles, CA',
            friendsCount:49,
            photoCount:132,
            videoCount:5,
            description:'Hello my name is John,nice to meet you!',
            timeWhenBecomeFriend:'April 2016',
            avatarImg:'https://images.unsplash.com/photo-1603893661066-ad3a9cca25ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            headerImg:'https://images.unsplash.com/photo-1515740921-36fe823b1ec6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80'
        },
        {
            id:2,
            name:'Nicholas Grissom',
            city:'San Francisco, CA',
            friendsCount:52,
            photoCount:240,
            videoCount:16,
            description:'Hello my name is Jessica,nice to meet you!',
            timeWhenBecomeFriend:'January 2016',
            avatarImg:'https://images.unsplash.com/photo-1604186838309-c6715f0d3e6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=635&q=80',
            headerImg:'https://images.unsplash.com/photo-1496147195884-6ab7f7c0a027?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
        },
        {
            id:3,
            name:'Mark Valentine',
            city:'Long Island, NY',
            friendsCount:30,
            photoCount:10,
            videoCount:2,
            description:'Hello my name is Jessica,nice to meet you!',
            timeWhenBecomeFriend:'December 2017',
            avatarImg:'https://images.unsplash.com/photo-1564004999843-525a5c4d07c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80',
            headerImg:'https://images.unsplash.com/photo-1517157322632-15df54e726d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
        },
        {
            id:4,
            name:'Chris Greyson',
            city:'Austin, TX',
            friendsCount:45,
            photoCount:161,
            videoCount:16,
            description:'Hello my name is Jessica,nice to meet you!',
            timeWhenBecomeFriend:'May 2018',
            avatarImg:'https://images.unsplash.com/photo-1603672546308-a17e61918d47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            headerImg:'https://images.unsplash.com/photo-1605198868699-34c71d33381b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
        },
        {
            id:5,
            name:'Elaine Dreifuss',
            city:'New York, NY',
            friendsCount:82,
            photoCount:204,
            videoCount:27,
            description:'Hello my name is Jessica,nice to meet you!',
            timeWhenBecomeFriend:'February 2016',
            avatarImg:'https://images.unsplash.com/photo-1603396828542-a423533372c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            headerImg:'https://images.unsplash.com/photo-1541741941000-21d0a964d542?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1444&q=80'
        },
        {
            id:6,
            name:'Bruce Peterson',
            city:'Austin, TX',
            friendsCount:73,
            photoCount:360,
            videoCount:11,
            description:'Hello my name is Jessica,nice to meet you!',
            timeWhenBecomeFriend:'September 2019',
            avatarImg:'https://images.unsplash.com/photo-1495546182004-93ead47bddb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            headerImg:'https://images.unsplash.com/photo-1604769283067-12509928fdb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'
        },
        {
            id:7,
            name:'Carol Summers',
            city:'Los Angeles, CA',
            friendsCount:49,
            photoCount:132,
            videoCount:5,
            description:'Hello my name is Jessica,nice to meet you!',
            timeWhenBecomeFriend:'October 2018',
            avatarImg:'https://images.unsplash.com/photo-1603901138866-e7f3579a8082?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=673&q=80',
            headerImg:'https://images.unsplash.com/photo-1604608672516-f1b9b1d37076?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1261&q=80'
        },
        {
            id:8,
            name:'Michael Maximoff',
            city:'Portland, OR',
            friendsCount:58,
            photoCount:304,
            videoCount:19,
            description:'Hello my name is Jessica,nice to meet you!',
            timeWhenBecomeFriend:'June 2016',
            avatarImg:'https://images.unsplash.com/photo-1603243710242-cc5b72944f07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80',
            headerImg:'https://images.unsplash.com/photo-1603999870974-2cd2258dac8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'
        },
        {
            id:9,
            name:'Mike Adams',
            city:'New York,CA',
            friendsCount:25,
            photoCount:10,
            videoCount:6,
            description:'Hello my name is Jessica,nice to meet you!',
            timeWhenBecomeFriend:'April 2016',
            avatarImg:'https://images.unsplash.com/photo-1603614486387-276f74fcbe2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80',
            headerImg:'https://images.unsplash.com/photo-1603568301602-3924e87dc8d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
        },
        {
            id:10,
            name:'John Doe',
            city:'Portland, OR',
            friendsCount:15,
            photoCount:24,
            videoCount:0,
            description:'Hello my name is Jessica,nice to meet you!',
            timeWhenBecomeFriend:'April 2017',
            avatarImg:'https://images.unsplash.com/photo-1603622592332-5e4d29ae8a7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            headerImg:'https://images.unsplash.com/photo-1589577529310-d11c182c967b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80'
        },
        {
            id:11,
            name:'Tom Adams',
            city:'Austin, TX',
            friendsCount:44,
            photoCount:62,
            videoCount:19,
            description:'Hello my name is Jessica,nice to meet you!',
            timeWhenBecomeFriend:'October 2017',
            avatarImg:'https://images.unsplash.com/photo-1602666642351-3d269107f586?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
            headerImg:'https://images.unsplash.com/photo-1549799521-b6b4c1aaf2ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80'
        },
        {
            id:12,
            name:'Ron Derk',
            city:'New York,CA',
            friendsCount:35,
            photoCount:7,
            videoCount:24,
            description:'Hello my name is Jessica,nice to meet you!',
            timeWhenBecomeFriend:'July 2019',
            avatarImg:'https://images.unsplash.com/photo-1603127951828-9d92f05e8763?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=652&q=80',
            headerImg:'https://images.unsplash.com/photo-1498595707991-4fc87268b184?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80'
        },
        {
            id:13,
            name:'William Park',
            city:'Los Angeles, CA',
            friendsCount:21,
            photoCount:39,
            videoCount:13,
            description:'Hello my name is Jessica,nice to meet you!',
            timeWhenBecomeFriend:'April 2016',
            avatarImg:'https://images.unsplash.com/photo-1598257609947-6dc5586a9962?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            headerImg:'https://images.unsplash.com/photo-1585508876155-0f061dfeaa50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80'
        },
        {
            id:14,
            name:' Jack Roah',
            city:'San Francisco, CA',
            friendsCount:91,
            photoCount:28,
            videoCount:3,
            description:'Hello my name is Jessica,nice to meet you!',
            timeWhenBecomeFriend:'February 2016',
            avatarImg:'https://images.unsplash.com/photo-1583023344958-836f5c4b1d19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80',
            headerImg:'https://images.unsplash.com/photo-1605212663576-e9ea14c2a6e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80'
        },
    ],
    findFriends:[
        {
            id:15,
            name:'Joahna Mur',
            commonFriends:4,
            img:'https://cdn2.iconfinder.com/data/icons/people-flat-design/64/Woman-Lady-Girl-Female-Avatar-People-Happy-512.png'
        },
        {
            id:16,
            name:'John Tasy',
            commonFriends:8,
            img:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxETERITEhMTFRIXGRUSFhgWEBUXGBUVGBUXFxgWFhUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lICIwLzUwLS0tLS0tLS8rMC0vKy01LS01LS0tLS8rKy8tLS0rLS0tNy0tLS0tMC0tLSstLf/AABEIAOEA4AMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQIDBAYHAQj/xAA8EAACAQICBwUFBwMFAQEAAAAAAQIDEQQhBQYSMUFRYTJxgZGhEyJSsdEHI0JyksHwFGKiM2PC4fGyFf/EABoBAQADAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAsEQACAgEEAQIEBgMAAAAAAAAAAQIDEQQSITFBYbEiMlFxBRMUgcHhI0KR/9oADAMBAAIRAxEAPwDuIAAAAAAAAAKZzSTbaSWbbdku9mr6X1ypwvGgvaS+J3UF3cZei6mldUrHiKJwbTKSSu3ZdSFx+tWFp3Sk6kuUFf8Ay3epoWkNKVqz+8m2vh3RXdFZGEd9egX+7/4W2m2YvXeo/wDTpxiucm5PyVrepE4jWPFz31ZL8qUfVK5Eg640Vx6iicIyKmNqy7VSo++pJ/uWGzwtVdtZxs+j3+DLvEV0C8mX6eNqx7NSou6pJfuRtLHReTTi/QykyIzhNcchNMlsPrHi4bqsn+ZKXq1clsJrvUX+pTjJc4txfk7p+hqYKyorl3FDCOlYDWrC1LLacHymrf5bvUmoyTV07rocKoYnZq+ze5tqPfyJ7R+lK1F/dzaXw74vvi8jg/SRmswePRlUsnWAarojXKnO0a69nL4ldwffxj6rqbRCaaTTTTzTTun3M5LKpVvEkRgqABmQAAAAAAAAAAAACN0zpmlh43m7yfZgu1L6LqYWsmsUcOtiFpVnw4Q6y69Dn2IrynJznJyk822dun0jn8UuvcskZ2mNN1sQ/fdocILsrv8AifVkYAerGKisIuACMxNdzlsp2ju+rfQpbaq0VbwSMasW7J37ioh//wBSKexRjtW3ye7v6nlTHS4zt5IxeqjHvl+hG9ImQQUdKf7i8WjIWkZNZOPegtZD1G9FjT8HFqcHnb3l04O3mNB6T2pezlvd7crrPwyuY+MxSSd3eT4fUxtAw++i27KKcm33NfuckbG7t0eMson8WTbTyckk29xYnjYLc792fqR+KxTlvyiv5mztt1EILjll3JItNOVam+O3teCTbJ0jNEUr3qPd2Yd3GXjZeXUkyNLFqGX5EFwCT0Pputh37jvDjB9l93wvqiMB0SipLDLnU9DaZpYiN4O0l2oPtR+q6kkcfw9eUJKcJOMlmmjoOresUcQtido1lw4T6x69DytRpHD4o9exRonwAcRUAAAAAAEBrRp9YeOxCzrSWX9i+J9eSM7TulY4ek5vOTyhH4pfRb2cwxFeU5SnN3lJ3b6nbpNPve6XXuWSKJzbbbbbbu23dtve2ykA9YuADGx1dxStvfoVnNQjuZDeC/VmknmllzNV0lWatFcc33cjJxGLjF+8235si8XW25XtbK3zPKvu/Ma46MZSyXFiNmOzHfvb69DGbvm95XRouTsv/DMVOjDtPafn6IwII89TM94mj8H+KKJSoPg4+DAMIGTLDL8ElLpez9THlFrJ5MAzv69JJRjuyzZjTxMpNbWa5bkWQAbJgNLTks4RUVkrNry6ElQxcZZbnyZpam+b8y7Sxc1xv35nTDVWR75LKbN2BGaI0mqnuvtdeP1JM9KuxTjlGqeQVQm0002mndNOzTW5plILknRtV9PrER2J5VorP+9fEuvNE+cfw9eUJRnB2lF3T6nT9BaVjiKSmspLKcfhl9HvR5Or0+x7o9exRokQAcRUFM5pJtuySu2+CW9lRq2vWk9imqMX7085dIJ7vF+iZpVW7JKKCNW1g0q8RWcvwL3YLlHn3vf5ciMAPejFRWEagAEgEfpfJJ8r/K/7GfNtLJX6XIvG4hyytZK+T/c5tVJKDT8lJvg1hu+b3ngB5RkXnVstmPjbi/oXKeAm+S7y1SqbOaV5cL8P+zydeT3yfmAX5aPmt1n4/UxqlNx3po9VSS3N+bLscZPjaS6oAxz1yZkfdy5wfmimeEks17y5rMAsA9atvLkaErOVrJc+PcAWgAAVU5uLTi7NZpm64LEKpCM1xXk+K8zSDYdV6/uzhyakvHJ/JeZ16OeJ7fqXg+ScAB6ZqCT1f0q8PWUvwP3ZrnHn3rf58yMBEoqSwwdjhNNJp3TV01xT3MqNW1F0nt03Rk/ehnHrBvd4P0aNpPBtrdcnFmTPJSSTb3LM5RpjHOtWqVODfu9IrKPp82b7rhjfZ4Wdn707U147/RM5qd+gr4cy8QAD0CwAAAI7Tqk4KMXa7z6pcPkSJHaWnuXJN/zyMNS8VsrPo1arCzte9vmUANnkGIB1TRmoVL+gcZRX9VUgpbcs/Zy7UYx5Lg2s3mcwxWHnTnKnUi4zi9mUXvTX83mcLYzbS8FpQcey0DpX2e6uYWvgqk6tNTnOUoNvfBRtbYf4XxuuZqmtmq9XBTzvOjJ+5Ut/jLlL0fDilEbYuTj5Dg0skAVQm1ubXcykGpUyo4+a5PvX0KK+KlLJ7uhYAAKqcHJpJNt7kkUkrq7iIRqPasnJWi3wd93S/wCxeuKlJJvBK7LEtEV0r7D81fyuXtXpONezyupRt6/sbSYtfBRdSFRZSi8/7lZqz8zv/SqElKL6NNmOjKAB2FwAADN0PjnRrU6nBO0usXlL0+SOrxkmk1ueZxs6VqfjfaYWF370L034bvRo8/X18KZWRA/aDir1KVP4Yub75Oy9IvzNTJbWqvt4us+TUP0pL53Ik69PHbXFEroAA1JAAAPKibWTs+djAnhWlKc3eycu+y4kgU1o3i1zTRnZWpcvwQ1k0dwdlffLdzfU9oRTnFPc5JPuvZnYdT8DTpYZVWoqck5Tm0rqKbsr8EkjSNYdFSrwxuPirR9pBU0lvirQlNr9L73I+eV2ZuLXXGfUo68LJ2E17WzVOjjI37FdK0aiW9fDNfiXqvQnMHXU6cJrdKMZeaTLp5sZOLyjqaTXJoGoVOvgq9TB4mOyqn3lKW+E5xXvKMtzbik7b/dN4x2Dp1qcqdWKlCSs0/5k+pdnBPek7NNXV7NO6feVFpz3S3eSIxwsHD9b9WZ4KrbOVGV/Zz/4ytukvXfztAJ+J9CaW0bTxFKdGqrwkvFPhKL4NHCtN6KqYavOjU3xeT4Si+zJd68s1wO+i7esPs5rIbXwX9O6HdD2VSN3QrRVSlJ9Vdwl/cvVZ90Sdj0VoWOJ0RQoVMnKmpRfwSu3CXqsuV0chxWHlTnKnNWnFuMlyadmWqs3ZXlETjjktF6hhakk3CMmlxS/lyUo6AqTwMsVFN7NRxa/29lXmu6WX/hv9KdKtoyjUgknCMI2S7MotQnHzu/JmkbIucYvy8fZiMMmn6Cx7qRcX2o28n/4Shj4fBxhOpNb52b6W5eN2ZB7lUZRilI0XQABoSAAADbPs+xVqlWn8UVNd8XZ+kl5GpktqrX2MXRfNuH6k0vWxlqI7q5Ih9GDpCptVasuc5vzkzHPWzw1SwsEgAAAAAAMAAn9FaKeIoxVSvL2MW17KEVFNqV/eldt70bN/Q05UpUdlKk4unspZKLVsjVNW9JqlJwm7Qlx4RlzfR/Q3Og081muaPlPxCudd7z03lfv/JrFLBg6uUpwoRpT7VJulfnFO8Guji4kmAcTeXklLCAAIJBqP2gauf1SoOCtVU1Tv/tyu5X7rX8zbgXhNxeURKOVgt4eioQjCOUYpRXclZfI5X9pWin/AFkXTjeVVQyXGTbh80vM6wRlbRani4V5LKnDZh+dyld+Ct+roXps2SyVnHcsHmiNGRw+HpUFZqMdmWWUpPObt1bfmRGk9F0MNh63sYbHtZQvFSls3TTvGLdo5Lh0NmrtLN5LmzTNZNJqrJQg7wjx4SlzXRfU30FU7dQn4Ty/259yZYSIUAH1hkAAAAAADI0fU2atKXKcH5SRjnqYaysANHhkY+ns1akeU5rykzHCeVkAAAAAAAAAA2DUyratKLe+Dsr8U0zXy/gsS6dSM474u/euK8VdGOpq/NqlBeUSnhnSwWsLiI1IRnF3jJXX07y6fGtNPDNgACAAAAAC1isRGnCU5O0Yq7+i6kpNvCBqWudW9aMU90FdX4ttmvl/G4l1Kkpy3yd+5cF4KyLB9lpqvyqowfhGLeWAAbEAAAAAAA9SPDIwFPaq0485wXnJBvCyDN1oobGLrLm9v9ST+bZFG1/aBhrVadThKLi++Lv8pehqhlRLdXFkLoAA1JAAAAAAAAAJfQGmXQlsyu6Ut6+F/Ev3RvNKopJSi04vNNbmjl5L6v6WnSmob6cnZrk3xjyZ5P4hoFYnZDvz6/2XjLBvYKaVRSV07oqPnDQAFNWooq7dkAKtRRTlJpRWbb3JGjaf0y68tmN1SjuXxP4n+yKtY9KTqVHC9qcXkubtvlzIY+j/AA7QqCVs+316f2Zyl4AAPWKAAAAAAAAAAldV6G3i6K5Pb/Sm/mkRRtf2f4a9WpU4Riorvk7/ACj6mV8ttcmQ+id1ywftMLJrfTaqLuWUvRt+Bzc7HOKaaeaeT7mcn0rgnRrVKb/C8usXnF+Vjk0FmU4ERZiAA9AsAAAAAAACqEG8opt9E38gCku4eEpTiopuTaslvbMmlojES3Up+Kt87G56s6CVCO3OzqyX6E/wrrzZz3XwhH6v6EN4MO84SazjJb/5xMmGkpcUn6EnpLBKauspL1XJkDUpuLs0fJW1uEsG0JbkZc9JS4JL1MVylOSvdt5Itk3ojBbK25dp7ui+rIrrc5YEpbUc80hTlGrNTTUtp3T78jHOjaxaEjiIXVlVivdfNfDLp8jSKuh8RHfSn4La+Vz62i+EopdYMVLJgArqU5R7Sa7018yg6SQAAAAAAAAAdI1Nwfs8LFvfUbqPueUfRJ+JoWisE61anTX4nn0is5PyudYhFJJLJLJdyPP19mEoFZMqNT170ZtQjXis4e7P8reT8G/XobYU1aalFxkrxaaa5p5NHBVY65qSKpnHASOndGPD1pQfZ7UHzi93itzI496MlJZRoACc1d0J7X7yp/pp5L42v2K2TUI7mQ3gw9F6Iq1+yrQ4ye7w5s2fCas0Ir3rzfVtLyX/AGTMIJJJJJLJJKySPTy7dVOb44Rm5MxaWjKEezSprrsK/mzKirbsl0AOdyb7IBk0XkYxew73oqC+YWNoLfZWfzM0sYvs+JhqIpwfoaVvEjBwuj4OW1wXDg2Spj4Pc+8yBp4pVp/UWPMiiq8mYpfxD3IsG5mGr7zFq6Ooy7VKm+uwr+ZlAlNroEPitWsPJe6nB84t28mazpTQtWjm/eh8S/5Lgb8JJPJ5o6K9VOD55RKk0cuBsOseg1TvVpL3PxR+Hqv7fka8erXZGyO5GieQASOgtGPEVowXZ7U3yit/i9y7y0pKKyyTaNRNGbMJV5LOfuw/Knm/Fr06m2FNKmoxUYq0UkkuSWSRUeDbY7JuTM2wADMgi9YdELEUnHdOOcHyfJ9GcxrUpRk4yTUk7NPg0diNc1r1f9svaU197FZr40uH5uXl3duk1Gx7JdexZM0fRmDdarGmuO98orezolGkoxUYq0UrJdCA1PwWzGdSStJvYV1mlF5+v/ybENXbuntXSIk+QADkKAAAAqpuzRSADLnKyLNV3g/5xKZzuPwSM7V8D+xePzI9w7tBvr9C/CV0Y8Owu88pzsKV/jX2E/mZ7VebKD08NCgAAAAAB5OKaaaunk1zTOe6ZwPsasofh7UesXu8s14HQyC1twW3SU4q8oPgs3GWTXnY6tJbsnjwy0XyadRpSlJRim5N2SXFs6dq9ohYeko75yzm+b5LojA1U1f9ivaVF97JZL4E+H5ufl37GTq9RveyPXuWbAAOIqAAAAAAY9fD3zW/5mISZarUFLoyUyDABVODW8pJIAAAAAABXHsy7igqhx7mVnzFkrsfhj4lJU90e5FIr+RfYmXbAALFQAAAAVQg3uAPDLw9C2b3/Iro0FHqy6Q2SAAQSAAAAAAAAAAAAeSinvMWphfh8jLABGSi1vPCTlFPeWJ4VcMickYMMF6WGkupblBren5EgpKobyk9TAD4dy+R4es8IisIPsAqjBvcn5FyOGk+hILJ7GLe4y4YVccy/GKW4jIwYtPC8/IyoxS3HoIJAAAAAAAAAAAAAAAAAAAAAAAAAAAMeuYjALIgIy6AAYMgAFSQAAAAAAAAAAAAAAD/2Q=='
        },
        {
            id:17,
            name:'Luke Noah',
            commonFriends:12,
            img:'https://cdn2.iconfinder.com/data/icons/people-flat-design/64/Man-Person-People-Avatar-User-Happy-512.png'
        },
        {
            id:18,
            name:'Jim Opin',
            commonFriends:9,
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuXxMrXeTE2CkR2lUvv7Cra7K4i1OD-VDYNA&usqp=CAU'
        },
        {
            id:19,
            name:'Julian Ces',
            commonFriends:7,
            img:'data:image/png;base64,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'
        },
    ]
}
const reducer = (state=initialState,action)=>{
    switch (action.type) {
        case 'DELETE_FRIEND':
            return state;

        default:
            return state;
    }
}
export default reducer;