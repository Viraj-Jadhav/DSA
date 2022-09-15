#include <stdio.h>
#include <iostream>
using namespace std;
int main()
{
    // char a[] = "python";
    string a;
    getline(cin, a);
    cout << "reverse STRING is" << endl;
    char t;
    int i, j;
    if (!a.empty())
    {
        for (j = 0; a[j] != '\0'; j++)
        {
        }
        // j = j - 1;
        for (i = 0, j = j - 1; i < j; i++, j--)
        {
            t = a[i];
            a[i] = a[j];
            a[j] = t;
        }
        cout << a << endl;
    }
    else
    {
        cout << "string is empty" << endl;
    }
}