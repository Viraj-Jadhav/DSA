#include <stdio.h>
#include <iostream>
using namespace std;
int main()
{
    char a[] = "How are you";
    int i, vcount = 0, ccount = 0;
    for (i = 0; a[i] != '\0'; i++)
    {
        if (a[i] == 'a' || a[i] == 'A' || a[i] == 'e' || a[i] == 'E' || a[i] == 'o' || a[i] == 'O' || a[i] == 'i' || a[i] == 'I' || a[i] == 'U' || a[i] == 'u')
        {
            vcount++;
        }
        else if (a[i] >= 65 && a[i] <= 90 || a[i] >= 97 && a[i] <= 127)
        {
            ccount++;
        }
    }
    cout << vcount << endl;
    cout << ccount << endl;
    return 0;
}