from django import template

register = template.Library()

@register.filter
def partition(thelist, n):
    """
    Break a list into ``n`` pieces. The last list may be larger than the rest if
    the list doesn't break cleanly. That is::

        >>> l = range(10)

        >>> partition(l, 2)
        [[0, 1, 2, 3, 4], [5, 6, 7, 8, 9]]

        >>> partition(l, 3)
        [[0, 1, 2], [3, 4, 5], [6, 7, 8, 9]]

        >>> partition(l, 4)
        [[0, 1], [2, 3], [4, 5], [6, 7, 8, 9]]

        >>> partition(l, 5)
        [[0, 1], [2, 3], [4, 5], [6, 7], [8, 9]]

    """
    try:
        n = int(n)
        theList = list(thelist)
    except (ValueError, TypeError):
        return [theList]
    p = len(theList) // n + (len(theList) % 5 > 0)

    newList = []
    for i in range(n - 1):
        newList.append(theList[p*i:p*(i+1)])
    newList.append(theList[p*(n-1):])

    return newList

def appendImgurThumbnail(url, thumbnailSize="l"):
    ending = url[-4:]
    if "i.imgur.com" in url:
        url = url[:-4]
        url += thumbnailSize + ending
        return url

register.filter('appendImgurThumbnail', appendImgurThumbnail)