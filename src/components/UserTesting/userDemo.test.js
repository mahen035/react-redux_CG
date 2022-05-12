import {userDemo, BASE_URL} from "./userDemo";
import axios from 'axios';

     jest.mock('axios');

      test("should return users list", async () =>  {

        const users = [
          { id: 1, name: "John" },
          { id: 2, name: "Andrew" },
        ];
        axios.get.mockResolvedValueOnce(users);
  
        // when
        const result = await userDemo();
  
        // then
       // expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/users`);
       
        expect(result[0].name).toEqual("John");
      });
    
  