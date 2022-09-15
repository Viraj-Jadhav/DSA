#include <stdio.h>
#include <iostream>
using namespace std;
int main()
{
    string a;
    cin >> a;
    string b;

    // reversing array first
    int i, j;
    for (i = 0; a[i] != '\0'; i++)
    {
    }
    // i = i - 1;
    for (j = 0, i = i - 1; i >= 0; i--, j++)
    {
        b[j] = a[i];
    }
    b[j] = '\0';
    //
    // cout << b;
    //  comparing array
    for (i = 0, j = 0; a[i] != '\0' && b[i] != '\0'; j++, i++)
    {
        if (a[i] != b[j])
            break;
    }

    if (a[i] == b[j])
        cout << "this is pallindrome" << endl;

    else
        cout << "Not a pallindrome" << endl;

    return 0;
}