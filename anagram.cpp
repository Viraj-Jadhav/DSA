#include <stdio.h>
#include <iostream>
using namespace std;
int main()
{
    char a[] = "decimal";

    char b[] = "pedical";

    int i, H[26] = {0};
    for (i = 0; a[i] = '\0'; i++)
    {
        H[a[i] - 97] += 1;
    }
    for (i = 0; b[i] = '\0'; i++)
    {
        H[b[i] - 97] -= 1;
        if (H[b[i] - 97] < 0)
            cout << "THIS IS NOT AN ANAGRAM" << endl;

        break;
    }
    if (b[i] == '\0')
        cout << "THIS IS AN ANAGRAM" << endl;
    return 0;
}