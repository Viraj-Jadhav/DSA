#include <stdio.h>
#include <iostream>
using namespace std;
int main()
{
    char a[6];
    scanf("%s", a);
    int H[26] = {0}, i, j;
    for (i = 0; a[i] != '\0'; i++)
    {
        H[a[i] - 97] += 1;
    }
    for (j = 0; j < 26; j++)
    {
        if (H[j] > 1)
        {
            printf("%c", j + 97);
            cout << endl;

            // printf("%d", H[j]);
        }
    }
}