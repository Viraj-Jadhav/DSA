#include <stdio.h>
#include <iostream>
using namespace std;
int valid(char name[])
{
    int i;
    for (i = 0; name[i] != '\0'; i++)
    {
        if (!(name[i] >= 65 && name[i] <= 90) && !(name[i] >= 97 && name[i] <= 122) && !(name[i] >= 48 && name[i] <= 57))
        {
            // cout << "invalid string" << endl;
            break;
        }
        // else
        // {
        //    cout << "valid string" << endl;
        //}
    }
    if ((name[i] >= 65 && name[i] <= 90) && (name[i] >= 97 && name[i] <= 122) && (name[i] >= 48 && name[i] <= 57))

        cout << "valid password" << endl;

    else

        cout << "invalid password" << endl;

    // cout << "valid string" << endl;

    return 0;
}

int main()
{
    // cout << "Enter password" << endl;
    char name[] = "avraj";
    // cin >> name;
    //  if (valid(name) == 1)
    //    cout << "valid string" << endl;
    //  else
    //     cout << "invalid string" << endl;
    valid(name);
    // cout << "valid string" << endl;

    return 0;
}